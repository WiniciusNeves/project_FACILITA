import { StyleSheet } from "react-native";

export const button = StyleSheet.create({
  base: {
    width: "100%",
    padding: 14,
    backgroundColor: "#6C63FF",
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  disabled: {
    backgroundColor: "#ccc",
  },
});

export const buttonText = StyleSheet.create({
  base: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export const errorText = StyleSheet.create({
  base: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
})