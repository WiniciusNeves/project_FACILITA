import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';

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
        isSelected && tagStyles.tagSelected,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={[tagStyles.text, isSelected && tagStyles.textSelected]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const tagStyles = StyleSheet.create({
  tag: {
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    minWidth: 60,
  },
  tagSelected: {
    borderWidth: 2,
    borderColor: '#6C63FF',
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  textSelected: {
    fontWeight: 'bold',
    color: '#6C63FF',
  },
});

export default Tag;
