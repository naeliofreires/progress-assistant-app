import React, { useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import LottieView from 'lottie-react-native';

import { Task } from '../../components/Task';
import { Text } from '../../components/Text';
import { TASK_STATUS } from '../../store/types';
import { NewTask } from '../../components/NewTask';
import { useStore } from '../../store/StoreProvider';
import { PlusButton } from '../../components/PlusButton';
import { Modal, useModalRef } from '../../components/Modal';
import { StatusFilter } from '../../components/StatusFilter';

import * as S from './styles';

export function Home() {
  const store = useStore();
  const modal = useModalRef();
  const [refreshing, setRefreshing] = useState(false);

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

  const onPressSaveTaskCallback = status => {};

  const pushDownRefresh = async () => {
    setRefreshing(true);
    await store.actions.load();
    setRefreshing(false);
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

      {_data.length ? (
        <FlatList
          data={_data}
          initialNumToRender={5}
          style={S.Styles.list}
          refreshing={refreshing}
          onRefresh={pushDownRefresh}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Task {...item} />}
          ItemSeparatorComponent={() => <S.ItemSepator />}
        />
      ) : (
        <S.FeedbackView>
          <LottieView
            autoPlay
            style={{ width: 200, height: 200, backgroundColor: 'transparent' }}
            source={require('../../assets/animations/empty-search.json')}
          />
        </S.FeedbackView>
      )}

      <S.PlusButtonView>
        <PlusButton onPress={openModal} />
      </S.PlusButtonView>

      <Modal ref={modal}>
        <NewTask onPressCancel={closeModal} onPressSaveCallback={onPressSaveTaskCallback} />
      </Modal>
    </S.Container>
  );
}
