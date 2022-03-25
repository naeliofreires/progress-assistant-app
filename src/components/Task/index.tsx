import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import { TaskDetails } from '../TaskDetails';
import { Modal, useModalRef } from '../Modal';

import * as S from './styles';
import { TaskType } from './types';
import { useActions } from '../../store/StoreProvider';
import { Text } from '../Text';
import { DateUtil } from '../../utils/DateUtil';

export const Task = (task: TaskType) => {
  const actions = useActions();
  const { title, completed, date } = task.attributes;

  const modal = useModalRef();
  const openModal = useCallback(() => {
    modal.current.open();
  }, []);

  const closeModal = useCallback(() => {
    modal.current.close();
  }, []);

  const onPressFinishButton = useCallback(async () => {
    const attributes = task.attributes;
    const data = { ...task, attributes: { ...attributes, completed: !attributes.completed } };
    await actions.update(data);
  }, [task]);

  const onPressDeleteButton = useCallback(() => {
    Alert.alert('Attention', 'Are you sure about deleting this task?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'OK', onPress: async () => await actions.remove(task.id as number) },
    ]);
  }, [task]);

  return (
    <>
      <S.Container onPress={openModal}>
        <S.IconView completed={completed}>
          {completed ? <EvilIcons name="check" size={50} color="white" /> : <SimpleLineIcons name="tag" size={30} color="white" />}
        </S.IconView>
        <S.InformationView>
          <S.Row>
            <Text value={title} typography="primary" color="primaryText" numberOfLines={1} />
          </S.Row>
          <S.Row>
            <Text value={DateUtil.formatDateToDayMonthYear(date)} typography="quartenary" color="primaryText" numberOfLines={1} />
          </S.Row>
        </S.InformationView>
      </S.Container>

      <Modal ref={modal}>
        <TaskDetails task={task} onPressBackButton={closeModal} onPressFinishButton={onPressFinishButton} onPressDeleteButton={onPressDeleteButton} />
      </Modal>
    </>
  );
};
