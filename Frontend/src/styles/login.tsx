import { StyleSheet } from "react-native";

export const container = StyleSheet.create({
  base: {
    flexGrow: 1,
    backgroundColor: "#F9FDFC",
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: "center",
  },
});

export const logo = StyleSheet.create({
  base: {
    width: 120,
    height: 120,
    marginBottom: 12,
  },
});

export const subtitle = StyleSheet.create({
  base: {
    textAlign: "center",
    fontSize: 14,
    color: "#333",
    marginBottom: 24,
    paddingHorizontal: 6,
  },
});

export const googleButton = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1877F2",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginBottom: 16,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export const divider = StyleSheet.create({
  base: {
    fontSize: 14,
    color: "#000",
    marginVertical: 12,
  },
});

export const inputContainer = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#6C63FF",
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: "100%",
    backgroundColor: "#FFF",
    marginBottom: 14,
    shadowColor: "#6C63FF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export const inputField = StyleSheet.create({
  base: {
    flex: 1,
    color: "#000",
    marginLeft: 8,
  },
});

export const icon = StyleSheet.create({
  base: {
    marginTop: 2,
  },
});

export const forgotPassword = StyleSheet.create({
  base: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
});

export const linkText = StyleSheet.create({
  base: {
    color: "#6C63FF",
    fontWeight: "bold",
    fontSize: 13,
  },
});

export const primaryButton = StyleSheet.create({
  base: {
    backgroundColor: "#6C63FF",
    paddingVertical: 14,
    borderRadius: 12,
    width: "100%",
    marginBottom: 12,
  },
  text: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export const footerText = StyleSheet.create({
  base: {
    fontSize: 13,
    color: "#333",
  },
});
