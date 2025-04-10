// src/components/BackButton.tsx
import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

interface BackButtonProps {
  onPress: () => void;
  text?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ onPress, text = "Voltar" }) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      style={styles.button}
      labelStyle={{ color: "#fff" }}
      buttonColor="#6C63FF"
    >
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    width: "40%",
    marginTop: 24,
    marginBottom: 16,
    borderRadius: 8,
  },
});

export default BackButton;

