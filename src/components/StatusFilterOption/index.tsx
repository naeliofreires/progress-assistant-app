import React from 'react';
import { Text } from '../Text';
import { BaseButton } from '../BaseButton';

import * as S from './styles';

export const StatusFilterOption = React.memo(({ onPress, selected, title }: { onPress(): void; selected: boolean; title: string }) => {
  return (
    <S.Option selected={selected}>
      <BaseButton onPress={onPress}>
        <Text value={title} typography="secondary" color={selected ? 'secondaryText' : 'tertiaryColor'} />
      </BaseButton>
    </S.Option>
  );
});
