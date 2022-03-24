import { StyleSheet, TextStyle } from 'react-native';

export type FONTS = 'primary' | 'secondary' | 'tertiary' | 'quartenaryFont' | 'onboarding' | 'description' | 'detailsHeader';

export const TEXT_STYLES = StyleSheet.create({
  primary: {
    fontSize: 34,
    lineHeight: 41,
    fontWeight: '700',
  },
  secondary: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    fontStyle: 'normal',
  },
  tertiary: {
    fontSize: 14,
    fontWeight: '400',
  },
  quartenaryFont: {
    fontSize: 14,
  },
  detailsHeader: {
    fontSize: 22,
    lineHeight: 20,
    letterSpacing: 1,
    fontWeight: '400',
  },
  description: {
    fontSize: 14,
    lineHeight: 27,
    fontWeight: '400',
  },
} as StyleSheet.NamedStyles<Record<FONTS, TextStyle>>);
