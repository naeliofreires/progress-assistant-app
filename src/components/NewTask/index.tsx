import React, { useCallback, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import { Text } from '../Text';
import { useTheme } from '../../theme';
import { TaskInput } from '../../graphql/services/types';

import * as S from './styles';

export const NewTask = ({ onPressCancel }: { onPressCancel(): void }) => {
  const palette = useTheme().palette;
  const [task, setTask] = useState({} as TaskInput);

  const onChange = useCallback((_: Event, selectedValue?: Date) => {
    const date = selectedValue ?? (new Date() as unknown as string);
    setTask(previous => ({ ...previous, date } as TaskInput));
  }, []);

  const onChangeInputTextTitle = useCallback((title: string) => {
    setTask(previous => ({ ...previous, title } as TaskInput));
  }, []);

  const onChangeInputTextDescription = useCallback((description: string) => {
    setTask(previous => ({ ...previous, description } as TaskInput));
  }, []);

  return (
    <S.Container>
      <S.InnerContainer>
        <S.Form>
          <Text value="add new task" alignment="center" color="primary" typography="primary" transform="uppercase" />

          <S.InputView>
            <Text value="title" color="primary" typography="secondary" transform="uppercase" />
            <S.InputText onChangeText={onChangeInputTextTitle} placeholder="type a title" value={task.title} />
          </S.InputView>

          <S.InputView>
            <Text value="description" color="primary" typography="secondary" transform="uppercase" />
            <S.InputText placeholder="type a description" onChangeText={onChangeInputTextDescription} value={task.description} />
          </S.InputView>

          <S.InputViewRow>
            <Text value="date" color="primary" typography="secondary" transform="uppercase" />
            <DateTimePicker
              mode="date"
              is24Hour={true}
              style={{ flex: 1 }}
              onChange={onChange}
              value={(task.date as unknown as Date) ?? new Date()}
            />
          </S.InputViewRow>
        </S.Form>

        <S.ActionsBox>
          <S.FinishedButton>
            <Text value="save" color="secondaryText" typography="tertiary" transform="uppercase" />
            <S.Box />
            <MaterialIcons name="done" size={24} color={palette.secondaryText} />
          </S.FinishedButton>

          <S.DeleteButton onPress={() => onPressCancel?.()}>
            <Text value="cancel" color="secondaryText" typography="tertiary" transform="uppercase" />
            <S.Box />
            <AntDesign name="close" size={24} color={palette.secondaryText} />
          </S.DeleteButton>
        </S.ActionsBox>
      </S.InnerContainer>
    </S.Container>
  );
};
