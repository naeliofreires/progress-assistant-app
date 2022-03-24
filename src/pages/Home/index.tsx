import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';

import { useStore } from '../../store';
import { Task } from '../../components/Task';
import { Text } from '../../components/Text';
import { StatusFilter } from '../../components/StatusFilter';

import * as S from './styles';

export function Home() {
  const store = useStore();

  const _data = useMemo(() => (store.filteredTasks.length ? store.filteredTasks : store.tasks), [store.filteredTasks, store.tasks]);

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
        style={{ padding: 8, backgroundColor: 'white' }}
        data={_data}
        ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', width: '100%', height: 8 }} />}
        renderItem={({ item }) => <Task {...item} />}
        keyExtractor={item => String(item.id)}
      />
    </S.Container>
  );
}
