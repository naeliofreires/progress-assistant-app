import { styled } from '../../theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  background-color: ${p => p.theme.palette.backgroundLight};
  padding: ${p => p.theme.units.half}px ${p => p.theme.units.base}px;
`;

export const Option = styled.View<{ selected?: boolean }>(({ theme, selected }) => ({
  borderRadius: 8,
  paddingVertical: theme.units.half,
  paddingHorizontal: theme.units.base,
  backgroundColor: selected ? theme.palette.accent : theme.palette.quinternaryColor,
}));
