import { styled } from '../../theme';

export const Option = styled.View<{ selected?: boolean }>(({ theme, selected }) => ({
  borderRadius: 8,
  paddingVertical: theme.units.half,
  paddingHorizontal: theme.units.base,
  backgroundColor: selected ? theme.palette.backgroundDark : theme.palette.quinternaryColor,
}));
