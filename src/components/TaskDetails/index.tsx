import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import { Text } from '../Text';
import { useTheme } from '../../theme';
import { BaseButton } from '../BaseButton';
import { DateUtil } from '../../utils/DateUtil';

import { Props } from './types';
import * as S from './styles';

export const TaskDetails = React.memo(({ task, onPressBackButton, onPressFinishButton, onPressDeleteButton }: Props) => {
  const palette = useTheme().palette;
  const { title, completed, description, date } = task.attributes;

  return (
    <S.Container>
      <S.Header>
        <S.BackButtonView>
          <BaseButton onPress={() => onPressBackButton?.()}>
            <AntDesign name="back" size={18} color={palette.quartenaryColor} />
          </BaseButton>
        </S.BackButtonView>
        <Text value="Details Task" color={palette.quartenaryColor} typography="detailsHeader" />
      </S.Header>

      <S.Information>
        <S.InformationRow>
          <Text value={title} transform="uppercase" color={palette.quartenaryColor} typography="tertiary" numberOfLines={1} />
        </S.InformationRow>

        <S.InformationRow>
          <Fontisto name="date" size={30} color={palette.quartenaryColor} />
          <S.Box />
          <Text value={`${DateUtil.formatDateToDayMonthYear(date)}`} color="quartenaryColor" typography="tertiary" />
        </S.InformationRow>

        <S.InformationRow>
          {completed ? <Entypo name="progress-full" size={30} color="green" /> : <Entypo name="progress-two" size={30} color="gray" />}

          <S.Box />

          {completed ? (
            <Text value="done 😃" transform="uppercase" color={palette.quartenaryColor} typography="tertiary" />
          ) : (
            <Text value="In progress..." color={palette.quartenaryColor} typography="tertiary" />
          )}
        </S.InformationRow>

        <S.InformationColumn lastItem>
          <S.InformationRow>
            <MaterialIcons name="description" size={30} color={palette.quartenaryColor} />
            <S.Box />
            <Text value="description" transform="uppercase" color={palette.quartenaryColor} typography="tertiary" />
          </S.InformationRow>

          <S.DescriptionView>
            <Text value={description} color="primaryText" typography="tertiary" />
          </S.DescriptionView>
        </S.InformationColumn>

        <S.ActionsBox>
          <S.FinishedButton completed={completed} onPress={() => onPressFinishButton?.()}>
            {!completed ? (
              <MaterialIcons name="done" size={24} color={palette.secondaryText} />
            ) : (
              <EvilIcons name="undo" size={24} color={palette.secondaryText} />
            )}

            <S.Box />

            {!completed ? (
              <Text value="finish" color="secondaryText" typography="tertiary" transform="uppercase" />
            ) : (
              <Text value="undo" color="secondaryText" typography="tertiary" transform="uppercase" />
            )}
          </S.FinishedButton>

          <S.DeleteButton onPress={() => onPressDeleteButton?.()}>
            <Entypo name="trash" size={24} color={palette.secondaryText} />
            <S.Box />
            <Text value="delete" color="secondaryText" typography="tertiary" transform="uppercase" />
          </S.DeleteButton>
        </S.ActionsBox>
      </S.Information>
    </S.Container>
  );
});
