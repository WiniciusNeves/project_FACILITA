import { StyleSheet } from "react-native";

export const container = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#f7fcfc",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const avatar = StyleSheet.create({
  base: {
    marginBottom: 24,
  },
});

export const avatarImage = StyleSheet.create({
  base: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export const avatarPlaceholder = StyleSheet.create({
  base: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const loginText = StyleSheet.create({
  base: {
    marginTop: 20,
    color: "#666",
  },
});

export const linkText = StyleSheet.create({
  base: {
    color: "#6C63FF",
    fontWeight: "bold",
  },
});
