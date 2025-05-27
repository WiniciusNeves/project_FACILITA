import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export type RadioButtonOption = {
  label: string;
  value: string;
};

interface RadioButtonGroupProps {
  options: RadioButtonOption[];
  value: string;
  onChange: (value: string) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      {options.map((option) => {
        const selected = value === option.value;
        return (
          <TouchableOpacity
            key={option.value}
            style={[styles.button, selected && styles.buttonSelected]}
            onPress={() => onChange(option.value)}
            activeOpacity={0.8}
          >
            <View style={[styles.radio, selected && styles.radioSelected]} />
            <Text style={[styles.label, selected && styles.labelSelected]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 12,
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#6A5ACD",
    marginHorizontal: 4,
    backgroundColor: "#FFF",
  },
  buttonSelected: {
    backgroundColor: "#6A5ACD",
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#6A5ACD",
    marginRight: 8,
    backgroundColor: "#FFF",
  },
  radioSelected: {
    backgroundColor: "#6A5ACD",
    borderColor: "#FFF",
  },
  label: {
    color: "#6A5ACD",
    fontWeight: "bold",
    fontSize: 16,
  },
  labelSelected: {
    color: "#FFF",
  },
});

export default RadioButtonGroup;
