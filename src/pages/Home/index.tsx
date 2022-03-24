import React from 'react';
import { FlatList, View } from 'react-native';
import { Task } from '../../components/Task';
import { useStore } from '../../store';

import * as S from './styles';

export function Home() {
  const store = useStore();

  return (
    <S.Container>
      <S.SubHeader>
        <S.Title>your tasks</S.Title>

        <S.AmountTasks>
          <S.AmountTasksText>{store.tasks?.length}</S.AmountTasksText>
        </S.AmountTasks>
      </S.SubHeader>

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
