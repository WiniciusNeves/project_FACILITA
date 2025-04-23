import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { primaryButton } from "../styles/auth";

interface PrimaryButtonProps {
    label: string;
    onPress: () => void;
    disabled?: boolean;
}


export default function PrimaryButton({ label, onPress, disabled }: PrimaryButtonProps) {
  return (
    <TouchableOpacity style={primaryButton.base} onPress={onPress} disabled={disabled} activeOpacity={0.7}>
      <Text style={primaryButton.text}>{label}</Text>
    </TouchableOpacity>
  );
}
