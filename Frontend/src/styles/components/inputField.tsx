import { StyleSheet } from "react-native";

export const inputContainer = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#6C63FF",
    shadowColor: "#6C63FF",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
});

export const input = StyleSheet.create({
  base: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
  },
});

export const iconStyle = StyleSheet.create({
  base: {},
});
