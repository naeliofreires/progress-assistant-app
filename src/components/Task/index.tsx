import React, { useCallback } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

import { TaskDetails } from '../TaskDetails';
import { Modal, useModalRef } from '../Modal';

import * as S from './styles';
import { TaskType } from './types';
import { useActions } from '../../store';

export const Task = (task: TaskType) => {
  const actions = useActions();
  const { title, description } = task.attributes;

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
        <S.IconView>
          <SimpleLineIcons name="tag" size={24} color="black" />
        </S.IconView>
        <S.InformationView>
          <S.Row>
            <S.Title>{title}</S.Title>
            <S.Done />
          </S.Row>

          <S.Description>{description}</S.Description>
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
