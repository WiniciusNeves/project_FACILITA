import React from "react";
import { Text, View, StyleProp, ViewStyle } from "react-native";
import { tagStyles } from "./Tag.style";

export interface TagProps {
  label: string;
  color: string;
  style?: StyleProp<ViewStyle>;
}

const Tag: React.FC<TagProps> = ({ label, color, style }) => {
  return (
    <View style={[tagStyles.tag, { backgroundColor: color }, style]}>
      <Text style={tagStyles.text}>{label}</Text>
    </View>
  );
};

export default Tag;
