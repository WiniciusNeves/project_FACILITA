import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { button } from "../styles/onboarding";

interface PrimaryButtonProps {
    label: string;
    onPress: () => void;
    disabled?: boolean;
}


export default function PrimaryButton({ label, onPress }: PrimaryButtonProps) {
  return (
    <TouchableOpacity style={button.base} onPress={onPress} activeOpacity={0.7}>
      <Text style={button.text}>{label}</Text>
    </TouchableOpacity>
  );
}
