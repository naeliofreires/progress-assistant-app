import { Platform } from 'react-native';
import IDefaultTheme from '../../@types/styled-components/native';

export default {
  palette: {
    primaryColor: '#999999',
    secondaryColor: '#777777',
    tertiaryColor: '#555555',
    quartenaryColor: '#333333',
    quinternaryColor: '#ededed',

    primaryText: '#111111',
    secondaryText: '#FFFFFF',
    tertiaryText: '#151515',

    backgroundDark: '#252525',
    backgroundLight: '#FFFFFF',

    accent: '#6BCB77',
    danger: '#FF6464',
  },
  units: {
    none: 0,
    half: 8,
    base: 16,
    double: 32,
  },

  platform: {
    ios: Platform.OS === 'ios',
    android: Platform.OS === 'android',
  },
} as IDefaultTheme;
