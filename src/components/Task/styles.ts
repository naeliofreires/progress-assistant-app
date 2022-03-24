import { styled } from '../../theme';

export const Container = styled.TouchableOpacity`
  max-height: 100px;
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background-color: ${p => p.theme.palette.quinternaryColor};

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const IconView = styled.View<{ completed: boolean }>`
  width: 55px;
  height: 55px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${p => (p.completed ? p.theme.palette.accent : p.theme.palette.quartenaryColor)};
`;
export const InformationView = styled.View`
  flex: 1;
  height: 100%;
  padding: 0 12px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
