import React from 'react';
import { Feather } from '@expo/vector-icons';

import * as S from './styles';

export const PlusButton = React.memo(({ onPress }: { onPress(): void }) => {
  return (
    <S.Container onPress={() => onPress?.()}>
      <Feather name="plus" size={30} color="white" />
    </S.Container>
  );
});
