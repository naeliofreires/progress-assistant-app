import React, { useCallback } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

import * as S from './styles';
import { TaskType } from './types';
import { Modal, useModalRef } from '../Modal';
import { TaskDetails } from '../TaskDetails';

export const Task = (task: TaskType) => {
  const {
    attributes: { title, description },
  } = task;

  const modal = useModalRef();
  const closeModal = useCallback(() => {
    modal.current.close();
  }, []);

  return (
    <>
      <S.Container onPress={() => modal.current.open()}>
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
        <TaskDetails task={task} onPressBackButton={closeModal} />
      </Modal>
    </>
  );
};
