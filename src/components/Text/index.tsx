import React, { useMemo } from 'react';
import { Text as ReactNativeText } from 'react-native';

import { TextProps } from './types';
import { TEXT_STYLES } from './styles';
import { useTheme } from '../../theme';

export const Text: React.FC<TextProps> = React.memo(props => {
  const { color, value, styles, fontSize, children, transform, typography, alignment = 'auto', ...rest } = props;

  const palette = useTheme().palette;
  const fontFamily = TEXT_STYLES[typography] || TEXT_STYLES.primary;

  const _color = useMemo(() => (palette as Record<string, string>)[color as string], [color, palette]);

  const _styles = useMemo(() => {
    return {
      ...styles,
      ...fontFamily,
      textAlign: alignment,
      fontSize: fontSize || fontFamily.fontSize,
      color: _color || color,
      textTransform: transform,
    };
  }, [_color, alignment, color, fontFamily, fontSize, styles, transform]);

  return (
    <ReactNativeText style={{ ...(_styles as any) }} {...rest}>
      {value}
      {React.isValidElement(children) && children}
    </ReactNativeText>
  );
});
