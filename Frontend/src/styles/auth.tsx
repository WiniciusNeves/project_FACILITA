import { StyleSheet } from "react-native";

export const container = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 24,
    alignContent: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 24,
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
    fontSize: 16,
    color: "#333",
    marginBottom: 16,
    paddingHorizontal: 6,
    lineHeight: 20,
  },
});

export const highlightedText = StyleSheet.create({
  base: {
    color: "#6C63FF",
    fontWeight: "bold",
    fontSize: 16,
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
    alignSelf: "flex-end",
    color: "#6C63FF",
    fontSize: 14,
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

export const captionText = StyleSheet.create({
  base: {
    textAlign: "center",
    alignSelf: "center",
    width: "auto",
    color: "#6C63FF",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

// Register styles
export const avatarImage = StyleSheet.create({
  base: {
    width: 150,
    height: 150,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 24,
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

// Modal styles
export const modalStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    container: {
        width: "90%",
        height: "50%",
        backgroundColor: "#FFF",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 24,
        alignItems: "center",
    },
    closeButton: {
        alignSelf: "flex-end",
    },
    closeText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
        textAlign: "center",
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        marginBottom: 16,
        color: "#333",
        lineHeight: 20,
    },
});

export const bulletList = StyleSheet.create({
  base: {
      marginVertical: 12,
      marginTop: 0,
  },
  bulletItem: {
      fontSize: 14,
      color: "#999",
      marginBottom: 4,
  },
  valid: {
      color: "#6C63FF", // Cor para itens válidos
  },
});

export const verifyEmailInputs = StyleSheet.create({
  base: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 16,
  },
  input: {
      width: 80,
      height: 80,
      borderWidth: 1,
      borderColor: "#6C63FF",
      textAlign: "center",
      fontSize: 24,
      color: "#000",
      backgroundColor: "#FFF",
      borderRadius: 8,
      marginBottom: 20,
      boxShadow: "0 4px 4px rgba(108, 99, 255, 1)",
      alignSelf: "center",
      alignItems: "center",
  },
});
