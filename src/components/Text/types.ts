import { TextProps as TextPropsRN } from 'react-native';
import Theme from '../../@types/styled-components/native';
import { FONTS } from './styles';

export interface TextProps extends TextPropsRN {
  /**
   * the string that the rendered by the component
   */
  value: string;
  /**
   * default styles to use around of the app
   */
  typography: FONTS;
  fontSize?: number;
  color: keyof Theme['palette'] | string;
  /**
   * use to align the text into the component
   *
   * by default: left
   */
  alignment?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  /**
   * property controls the capitalization of text.
   */
  transform?: 'none' | 'capitalize' | 'lowercase' | 'uppercase';
  /**
   * you can add other styles for a unique component without to change the others component around of the app
   */
  styles?: { [key: string]: string | number };
}
