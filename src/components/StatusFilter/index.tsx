import React, { useCallback } from 'react';
import { TASK_STATUS } from '../../store/types';
import { useStore } from '../../store/StoreProvider';
import { StatusFilterOption } from '../StatusFilterOption';

import * as S from './styles';

export const StatusFilter = () => {
  const store = useStore();
  const selectedStatus = store.filter.selectedStatus;

  const onChangeStatus = useCallback((value: TASK_STATUS) => store.actions.onChangeFilter(value), []);

  return (
    <S.Container>
      <StatusFilterOption selected={selectedStatus === TASK_STATUS.ALL} title="all" onPress={() => onChangeStatus(TASK_STATUS.ALL)} />

      <StatusFilterOption
        title="In Progress"
        selected={selectedStatus === TASK_STATUS.IN_PROGRESS}
        onPress={() => onChangeStatus(TASK_STATUS.IN_PROGRESS)}
      />

      <StatusFilterOption selected={selectedStatus === TASK_STATUS.DONE} title="Done" onPress={() => onChangeStatus(TASK_STATUS.DONE)} />
    </S.Container>
  );
};
