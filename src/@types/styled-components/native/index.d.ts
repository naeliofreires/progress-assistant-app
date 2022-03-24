import 'styled-components';

export default interface ThemeInterface {
  palette: {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    quartenaryColor: string;
    quinternaryColor: string;

    primaryText: string;
    secondaryText: string;
    tertiaryText: string;
    quartenaryText: string;

    backgroundDark: string;
    backgroundLight: string;
  };

  units: {
    none: number;
    half: number;
    base: number;
    double: number;
  };

  platform: {
    ios: boolean;
    android: boolean;
  };
}
