import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder || "Pesquisar"}
        placeholderTextColor="#333"
      />
      <Icon
        name="magnifying-glass"
        size={20}
        color="#87CEEB"
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#87CEEB",
    borderRadius: 16,
    paddingHorizontal: 16,
    marginVertical: 12,
    height: 48,
    shadowColor: "#87CEEB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 4,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#222",
    backgroundColor: "transparent",
  },
  icon: {
    marginLeft: 8,
  },
});

export default SearchInput;
