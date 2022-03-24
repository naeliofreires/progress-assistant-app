import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import { Task } from '../../components/Task';
import { Text } from '../../components/Text';
import { TASK_STATUS } from '../../store/types';
import { useStore } from '../../store/StoreProvider';
import { PlusButton } from '../../components/PlusButton';
import { StatusFilter } from '../../components/StatusFilter';

import * as S from './styles';
import { Modal, useModalRef } from '../../components/Modal';
import { NewTask } from '../../components/NewTask';

export function Home() {
  const store = useStore();
  const modal = useModalRef();

  const _data = useMemo(() => {
    const hasSelectedStatus = store.filter.selectedStatus !== TASK_STATUS.ALL;
    return hasSelectedStatus ? store.filteredTasks : store.tasks;
  }, [store.filteredTasks, store.tasks, store.filter.selectedStatus]);

  const openModal = () => {
    modal.current.open();
  };
  const closeModal = () => {
    modal.current.close();
  };

  return (
    <S.Container>
      <S.Header>
        <Text value="your tasks" transform="uppercase" typography="secondary" color="primaryText" />

        <S.AmountTasks>
          <Text value={String(_data?.length ?? '')} transform="uppercase" typography="tertiary" color="primaryText" />
        </S.AmountTasks>
      </S.Header>

      <StatusFilter />

      <FlatList
        data={_data}
        style={S.Styles.list}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Task {...item} />}
        ItemSeparatorComponent={() => <S.ItemSepator />}
      />

      <S.PlusButtonView>
        <PlusButton onPress={openModal} />
      </S.PlusButtonView>

      <Modal ref={modal}>
        <NewTask onPressCancel={closeModal} />
      </Modal>
    </S.Container>
  );
}
