import { StyleSheet } from "react-native";

export const inputField = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: "100%",
  },
  label: {
    fontSize: 15,
    color: "#6C63FF",
    marginBottom: 4,
    marginLeft: 4,
    fontWeight: "bold",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#6C63FF",
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 5,
    width: "100%",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: "#000",
    fontSize: 16,
    paddingVertical: 8,
  },
});
