import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import { Text } from '../Text';
import { BaseButton } from '../BaseButton';
import { Props } from './types';
import * as S from './styles';

export const TaskDetails = ({ task, onPressBackButton }: Props) => {
  const {
    attributes: { title, completed, description, date },
  } = task;

  return (
    <S.Container>
      <S.Header>
        <S.BackButtonView>
          <BaseButton onPress={() => onPressBackButton?.()}>
            <AntDesign name="back" size={18} color="black" />
          </BaseButton>
        </S.BackButtonView>
        <Text value="Details Task" color="tertiaryText" typography="detailsHeader" />
      </S.Header>

      <S.Information>
        <S.InformationRow>
          <Text value={title} transform="uppercase" color="primaryText" typography="secondary" numberOfLines={1} />
        </S.InformationRow>

        <S.InformationRow>
          <Fontisto name="date" size={24} color="black" />
          <Text value={`  ${date}`} color="quartenaryColor" typography="tertiary" />
        </S.InformationRow>

        <S.InformationRow>
          {completed ? <Entypo name="progress-full" size={30} color="green" /> : <Entypo name="progress-two" size={30} color="gray" />}

          {completed ? (
            <Text value="  done 😃" transform="uppercase" color="primaryText" typography="secondary" />
          ) : (
            <Text value="  in progress..." transform="uppercase" color="primaryText" typography="secondary" />
          )}
        </S.InformationRow>

        <S.InformationColumn>
          <S.InformationRow>
            <MaterialIcons name="description" size={24} color="black" />
            <Text value="  description" transform="uppercase" color="primaryText" typography="secondary" />
          </S.InformationRow>

          <S.DescriptionView>
            <Text value={description} color="primaryText" typography="tertiary" />
          </S.DescriptionView>
        </S.InformationColumn>
      </S.Information>
    </S.Container>
  );
};
