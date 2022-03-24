import React, { useEffect, useState } from 'react';
import { produce } from 'immer';

import { TaskType } from '../components/Task/types';
import { TaskService } from '../graphql/services';
import { ErrorTypeOverlap, PromiseResult, PROMISE_STATUS, StoreProviderType } from './types';
import { StorageUtil } from '../utils/StorageUtil';

export const StoreContext = React.createContext({} as StoreProviderType);

export const StoreProvider: React.FC = ({ children }) => {
  const [store, setStore] = useState({} as StoreProviderType);

  function load() {
    TaskService.load().then(data => {
      setStore(
        produce(draft => {
          draft.tasks = data;
        })
      );
    });
  }

  useEffect(() => {
    (async () => {
      try {
        const storage = await StorageUtil.getStore();

        if (storage) {
          setStore(previousStore => ({ ...previousStore, ...storage }));
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

  // async function add(data: TaskInput) {
  //   try {
  //     await TaskService.save(data);

  //     await load();

  //     return { status: PROMISE_STATUS.SUCCESS };
  //   } catch (error) {
  //     return {
  //       status: PROMISE_STATUS.FAILURE,
  //       message: (error as ErrorTypeOverlap[])[0].message as string,
  //     };
  //   }
  // }

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

  const value = { ...store, actions: { update } };

  return (
    <StoreContext.Provider
      // @ts-ignore
      value={value}
    >
      {children}
    </StoreContext.Provider>
  );
};
