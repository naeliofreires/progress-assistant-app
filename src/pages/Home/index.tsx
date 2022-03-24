import React from 'react';
import { FlatList, View } from 'react-native';
import { StatusFilter } from '../../components/StatusFilter';
import { Task } from '../../components/Task';
import { Text } from '../../components/Text';
import { useStore } from '../../store';

import * as S from './styles';

export function Home() {
  const store = useStore();

  return (
    <S.Container>
      <S.SubHeader>
        <Text value="your tasks" transform="uppercase" typography="secondary" color="primaryText" />

        <S.AmountTasks>
          <Text value={String(store.tasks?.length ?? '')} transform="uppercase" typography="tertiary" color="primaryText" />
        </S.AmountTasks>
      </S.SubHeader>

      <StatusFilter />

      <FlatList
        style={{
          padding: 8,
          backgroundColor: 'white',
        }}
        ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', width: '100%', height: 8 }} />}
        data={store.tasks}
        renderItem={({ item }) => <Task {...item} />}
        keyExtractor={item => String(item.id)}
      />
    </S.Container>
  );
}
