import { StyleSheet } from "react-native";

export const container = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 24,
    paddingTop: 60,
  },
});

// Auth styles
export const logo = StyleSheet.create({
  base: {
    width: 100,
    height: 100,
    marginBottom: 12,
    alignSelf: "center",
  },
});

export const title = StyleSheet.create({
  base: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
});

export const subtitle = StyleSheet.create({
  base: {
    textAlign: "center",
    fontSize: 14,
    color: "#333",
    marginBottom: 16,
    paddingHorizontal: 6,
    lineHeight: 20,
  },
});

export const googleButton = StyleSheet.create({
  base: {
    backgroundColor: "#0060FF",
    width: "90%",
    height: 54,
    borderRadius: 18,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
      width: 28,
      height: 28,
  },
  verticalLine: {
      width: 1,
      height: 20,
      backgroundColor: "#fff",
      marginHorizontal: 12,
  },
  text: {
    color: "#FFF",
      fontSize: 14,
  },
});

export const divider = StyleSheet.create({
  base: {
    textAlign: "center",
    marginBottom: 8,
    fontSize: 18,
    color: "#000",
  },
});

export const inputContainer = StyleSheet.create({
  base: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#6C63FF",
    paddingLeft: 24,
    marginBottom: 20,
    boxShadow: "0 4px 4px rgba(108, 99, 255, 1)",
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  inputField: {
    color: "#000",
    fontSize: 16,
    marginLeft: 8,
  }
});

export const forgotPassword = StyleSheet.create({
  base: {
    textAlign: "right",
    color: "#6C63FF",
    fontSize: 12,
    marginBottom: 16,
    marginRight: 30,
    textDecorationLine: "underline",
  },
});

export const primaryButton = StyleSheet.create({
  base: {
    backgroundColor: "#6C63FF",
    borderRadius: 16,
    paddingVertical: 12,
    marginBottom: 12,
    width: "60%",
    alignSelf: "center",
  },
  text: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 20,
  },
});

export const registerText = StyleSheet.create({
  base: {
    textAlign: "center",
    color: "#6C63FF",
    fontSize: 12,
    textDecorationLine: "underline",
  },
});

// Register styles
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

// Sing Up Complete Styles
export const profileImageContainer = StyleSheet.create({
  base: {
      alignItems: "center",
      marginBottom: 16,
      marginTop: 12,
  },
});

export const profileImage = StyleSheet.create({
  base: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: "#eee",
      justifyContent: "center",
      alignItems: "center",
  },
});