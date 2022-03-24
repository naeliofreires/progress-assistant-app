import { styled } from '../../theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${p => p.theme.palette.backgroundLight};
`;

export const InnerContainer = styled.ScrollView`
  flex: 1;
`;

export const Form = styled.View`
  padding: ${p => p.theme.units.base}px;
`;

export const InputView = styled.View(({ theme }) => ({ paddingVertical: theme.units.base }));

export const InputViewRow = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const InputText = styled.TextInput(({ theme }) => ({
  borderWidth: 1,
  padding: theme.units.half,
  borderRadius: theme.units.half,
}));

export const Box = styled.View`
  padding: ${p => p.theme.units.half}px;
`;

export const ActionsBox = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  margin-top: ${p => p.theme.units.double}px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.units.base}px;
  margin-bottom: ${p => p.theme.units.half}px;
`;

export const FinishedButton = styled(Button)`
  background-color: ${p => p.theme.palette.accent};
`;

export const DeleteButton = styled(Button)`
  background-color: ${p => p.theme.palette.danger};
`;
