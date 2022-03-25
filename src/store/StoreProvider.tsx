import React, { useCallback, useEffect, useState } from 'react';
import { produce } from 'immer';

import { TaskType } from '../components/Task/types';
import { TaskService } from '../graphql/services';
import { ErrorTypeOverlap, PromiseResult, PROMISE_STATUS, StoreProviderType, TASK_STATUS } from './types';
import { StorageUtil } from '../utils/StorageUtil';
import { TaskUtil } from '../utils/TaskUtil';
import { TaskInput } from '../graphql/services/types';

export const StoreContext = React.createContext({} as StoreProviderType);

/**
 * @Hooks
 */
export const useStore = () => React.useContext(StoreContext);
export const useActions = () => useStore().actions;

export const StoreProvider: React.FC = ({ children }) => {
  const [store, setStore] = useState(new StoreProviderType());

  function load() {
    TaskService.load().then(data => {
      setStore(previousStore => {
        const previousSelectedStatus = previousStore.filter.selectedStatus;
        const hasSelectedStatus = previousSelectedStatus !== TASK_STATUS.ALL;

        if (hasSelectedStatus) {
          const filteredTasks = TaskUtil.applyFilter(previousSelectedStatus, data);
          return { ...previousStore, tasks: data, filteredTasks };
        }

        return { ...previousStore, tasks: data };
      });
    });
  }

  useEffect(() => {
    (async () => {
      try {
        const storage = await StorageUtil.getStore();

        if (storage) {
          if (storage.tasks.length === 0) {
            load();
          } else {
            setStore(previousStore => ({ ...previousStore, ...storage }));
          }
        } else {
          load();
        }
      } catch (error) {
        throw new Error(`Error to start StoreProvider: ${error}`);
      }
    })();
  }, []);

  useEffect(() => {
    try {
      setTimeout(async () => {
        await StorageUtil.setStore(store);
      }, 1500);
    } catch (error) {
      throw new Error(`Error to persist the store in the device: ${error}`);
    }
  }, [store]);

  const onChangeFilter = useCallback((value: TASK_STATUS): void => {
    setStore(
      produce(draft => {
        draft.filter.selectedStatus = value;
        draft.filteredTasks = TaskUtil.applyFilter(value, draft.tasks);
      })
    );
  }, []);

  async function add(data: TaskInput): Promise<PromiseResult<TaskType | null>> {
    try {
      const task = await TaskService.save(data);

      await load();

      return {
        data: task,
        status: PROMISE_STATUS.SUCCESS,
        message: 'the task was created with success',
      };
    } catch (error) {
      return {
        data: null,
        status: PROMISE_STATUS.FAILURE,
        message: (error as ErrorTypeOverlap[])[0].message as string,
      };
    }
  }

  // async function remove(id: number) {
  //   try {
  //     await TaskService.remove(id);

  //     // await load();

  //     return { status: PROMISE_STATUS.SUCCESS };
  //   } catch (e) {
  //     return {
  //       status: PROMISE_STATUS.FAILURE,
  //       message: (e as ErrorTypeOverlap[])[0].message as string,
  //     };
  //   }
  // }

  async function update(data: TaskType): Promise<PromiseResult<TaskType | null>> {
    try {
      const task = await TaskService.update(data);

      load();

      return {
        data: task,
        status: PROMISE_STATUS.SUCCESS,
        message: 'the task was updated with success',
      };
    } catch (e) {
      return {
        data: null,
        status: PROMISE_STATUS.FAILURE,
        message: (e as ErrorTypeOverlap[])[0].message as string,
      };
    }
  }

  const value = { ...store, actions: { update, onChangeFilter, add } };

  return (
    <StoreContext.Provider
      // @ts-ignore
      value={value}
    >
      {children}
    </StoreContext.Provider>
  );
};
