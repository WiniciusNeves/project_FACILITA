import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { primaryButton } from "../styles/login";

interface PrimaryButtonProps {
    label: string;
    onPress: () => void;
    disabled?: boolean;
}


export default function PrimaryButton({ label, onPress, disabled }: PrimaryButtonProps) {
  return (
    <TouchableOpacity style={primaryButton.base} onPress={onPress} disabled={disabled}>
      <Text style={primaryButton.text}>{label}</Text>
    </TouchableOpacity>
  );
}
