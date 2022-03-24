import { styled } from '../../theme';

export const Container = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.palette.backgroundDark};
`;
