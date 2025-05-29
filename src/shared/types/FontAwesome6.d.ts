declare module 'react-native-vector-icons/FontAwesome6' {
  import * as React from 'react';
  import {IconProps} from 'react-native-vector-icons/Icon';

  export interface FontAwesome6Props extends IconProps {
    name: string;
    size?: number;
    color?: string;
    solid?: boolean;
    style?: any;
  }

  const FontAwesome6: React.FC<FontAwesome6Props>;
  export default FontAwesome6;
}
