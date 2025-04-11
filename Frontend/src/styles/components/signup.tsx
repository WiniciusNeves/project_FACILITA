import { StyleSheet } from "react-native";

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
