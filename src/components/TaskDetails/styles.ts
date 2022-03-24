import { styled } from '../../theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${p => p.theme.palette.backgroundLight};
`;

export const Header = styled.View`
  padding: ${p => p.theme.units.base}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.palette.quinternaryColor};
`;

export const BackButtonView = styled.View`
  position: absolute;
  border-radius: 8px;
  left: ${p => p.theme.units.base}px;
  padding: ${p => p.theme.units.half}px;
  background-color: ${p => p.theme.palette.quinternaryColor};
`;

export const Information = styled.ScrollView`
  flex: 1;
`;

export const InformationColumn = styled.View`
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  padding: ${p => p.theme.units.half}px ${p => p.theme.units.base}px;
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.palette.quinternaryColor};
`;

export const InformationRow = styled(InformationColumn)`
  flex-direction: row;
`;

export const DescriptionView = styled.View`
  padding: ${p => p.theme.units.base}px;
  min-height: 100px;
  border-radius: 8px;
  background-color: ${p => p.theme.palette.quinternaryColor};
`;
