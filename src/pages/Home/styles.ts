import { styled } from '../../theme';
import { StyleSheet } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-left: 12px;
  padding-right: 12px;
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.palette.backgroundLight};
`;

export const AmountTasks = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.palette.backgroundLight};
`;

export const ItemSepator = styled.View`
  height: 10px;
  width: 100%;
  background-color: transparent;
`;

export const PlusButtonView = styled.View`
  position: absolute;
  right: 16px;
  bottom: 34px;
`;

export const Styles = StyleSheet.create({
  list: {
    padding: 8,
    backgroundColor: 'white',
  },
});
