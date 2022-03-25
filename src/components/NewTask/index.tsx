import React, { useCallback, useMemo, useState } from 'react';
import produce from 'immer';
import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import { Text } from '../Text';
import { useTheme } from '../../theme';
import { PROMISE_STATUS } from '../../store/types';
import { useActions } from '../../store/StoreProvider';
import { TaskInput } from '../../graphql/services/types';

import * as S from './styles';

export const NewTask = ({ onPressCancel, onPressSaveCallback }: { onPressCancel(): void; onPressSaveCallback(status: PROMISE_STATUS): void }) => {
  const actions = useActions();
  const palette = useTheme().palette;

  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({ date: new Date().toISOString() } as TaskInput);

  const formIsValid = useMemo(() => task.title && task.date && task.description?.length >= 10, [task]);

  const onChange = useCallback((_: Event, selectedValue?: Date) => {
    const date = selectedValue ?? new Date();
    setTask(
      produce(draft => {
        draft.date = date as unknown as string;
      })
    );
  }, []);

  const onChangeInputTextTitle = useCallback((title: string) => {
    setTask(
      produce(draft => {
        draft.title = title;
      })
    );
  }, []);

  const onChangeInputTextDescription = useCallback((description: string) => {
    setTask(
      produce(draft => {
        draft.description = description;
      })
    );
  }, []);

  const onPressSave = useCallback(async () => {
    try {
      setLoading(true);

      const response = await actions.add(task);

      setTimeout(() => {
        onPressCancel();
        onPressSaveCallback?.(response.status);
      }, 1000);
    } catch (error) {
      console.error(`Error at NewTask.onPressSave: ${error}`);
    } finally {
      setLoading(false);
    }
  }, [task]);

  return (
    <S.Container>
      <S.InnerContainer>
        <S.Form>
          <Text value="add new task" alignment="center" color="primaryText" typography="primary" transform="uppercase" />

          <S.InputView>
            <Text value="title" color="primaryText" typography="secondary" transform="uppercase" />
            <S.Box />
            <S.InputText onChangeText={onChangeInputTextTitle} placeholder="type a title" value={task.title} />
          </S.InputView>

          <S.InputView>
            <Text value="description" color="primaryText" typography="secondary" transform="uppercase" />
            <S.Box />
            <S.InputText multiline placeholder="type a description" onChangeText={onChangeInputTextDescription} value={task.description} />
          </S.InputView>

          <S.Box />

          <S.InputViewRow>
            <Text value="date" color="primaryText" typography="secondary" transform="uppercase" />
            <DateTimePicker mode="date" is24Hour={true} style={{ flex: 1 }} onChange={onChange} value={task.date as unknown as Date} />
          </S.InputViewRow>
        </S.Form>

        <S.ActionsBox>
          <S.FinishedButton disabled={!formIsValid} onPress={onPressSave}>
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

        <S.Box />

        {loading && <ActivityIndicator size={30} color="black" />}
      </S.InnerContainer>
    </S.Container>
  );
};
