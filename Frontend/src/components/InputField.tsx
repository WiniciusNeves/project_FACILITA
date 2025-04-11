import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { input, inputContainer, iconStyle } from "../styles/components/inputField";

export default function InputField({ icon, ...props }) {
  return (
    <View style={inputContainer.base}>
      <Icon name={icon} size={20} color="#6C63FF" style={iconStyle.base} />
      <TextInput
        style={input.base}
        placeholderTextColor="#999"
        {...props}
      />
    </View>
  );
}
