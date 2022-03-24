import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import { Task } from '../../components/Task';
import { Text } from '../../components/Text';
import { useStore } from '../../store/StoreProvider';
import { StatusFilter } from '../../components/StatusFilter';

import * as S from './styles';
import { TASK_STATUS } from '../../store/types';

export function Home() {
  const store = useStore();

  const _data = useMemo(() => {
    const hasSelectedStatus = store.filter.selectedStatus !== TASK_STATUS.ALL;
    return hasSelectedStatus ? store.filteredTasks : store.tasks;
  }, [store.filteredTasks, store.tasks, store.filter.selectedStatus]);

  return (
    <S.Container>
      <S.SubHeader>
        <Text value="your tasks" transform="uppercase" typography="secondary" color="primaryText" />

        <S.AmountTasks>
          <Text value={String(_data?.length ?? '')} transform="uppercase" typography="tertiary" color="primaryText" />
        </S.AmountTasks>
      </S.SubHeader>

      <StatusFilter />

      <FlatList
        data={_data}
        style={S.Styles.list}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Task {...item} />}
        ItemSeparatorComponent={() => <S.ItemSepator />}
      />
    </S.Container>
  );
}
