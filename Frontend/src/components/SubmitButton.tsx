import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { button, buttonText } from "../styles/components/submitButton";

export default function SubmitButton({ text, onPress, disabled }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[button.base, disabled && button.disabled]}
      disabled={disabled}
    >
      <Text style={buttonText.base}>{text}</Text>
    </TouchableOpacity>
  );
}
