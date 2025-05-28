import React from 'react';
import {Text, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import {tagStyles} from './Tag.style';

export interface TagProps {
  label: string;
  color: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const Tag: React.FC<TagProps> = ({label, color, style, onPress}) => {
  // Recebe prop selected para destacar
  const isSelected = !!style && (style as any).selected;
  return (
    <TouchableOpacity
      style={[
        tagStyles.tag,
        {backgroundColor: color},
        isSelected && {borderWidth: 2, borderColor: '#6C63FF'},
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text
        style={[
          tagStyles.text,
          isSelected && {fontWeight: 'bold', color: '#6C63FF'},
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Tag;
