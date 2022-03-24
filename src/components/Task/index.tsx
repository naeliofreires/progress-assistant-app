import React, { useCallback } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import { TaskDetails } from '../TaskDetails';
import { Modal, useModalRef } from '../Modal';

import * as S from './styles';
import { TaskType } from './types';
import { useActions } from '../../store';
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

  const onPressFinishButton = useCallback(() => {
    const attributes = task.attributes;
    const data = { ...task, attributes: { ...attributes, completed: !attributes.completed } };
    actions.update(data);
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
        <TaskDetails
          task={task}
          onPressBackButton={closeModal}
          onPressFinishButton={onPressFinishButton}
          onPressDeleteButton={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </Modal>
    </>
  );
};
