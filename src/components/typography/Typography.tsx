import React from 'react';
import { Text, TextStyle } from 'react-native';

interface TypographyProps {
  children: React.ReactNode;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  color?: string;
  style?: TextStyle;
  size?: number;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  fontWeight = 400,
  color = '#000',
  style,
  size,
}) => {
  const fontFamily = {
    100: 'Poppins-Thin',
    200: 'Poppins-Light',
    300: 'Poppins-LightItalic',
    400: 'Poppins-Regular',
    500: 'Poppins-Medium',
    600: 'Poppins-SemiBold',
    700: 'Poppins-Bold',
    800: 'Poppins-ExtraBold',
    900: 'Poppins-Black',
  };

  return (
    <Text
      style={[
        {fontFamily: fontFamily[fontWeight], color, fontSize: size},
        style,
      ]}>
      {children}
    </Text>
  );
};

export default Typography;
