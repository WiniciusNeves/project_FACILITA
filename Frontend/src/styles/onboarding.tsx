import { StyleSheet } from "react-native";

export const container = StyleSheet.create({
    base: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingVertical: 24,
        paddingHorizontal: 16,
        justifyContent: "center",
    },
});

export const skipContainer = StyleSheet.create({
    base: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 16,
    },
});

export const skipText = StyleSheet.create({
    base: {
        color: "#6C63FF",
        fontWeight: "600",
    },
});

export const icon = StyleSheet.create({
    base: {
        marginLeft: 4,
    },
});

export const imageContainer = StyleSheet.create({
    base: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignSelf: "flex-start",
    },
});

export const image = StyleSheet.create({
    base: {
        width: 370,
        height: 290,
        marginTop: 16,
    },
});

export const indicatorContainer = StyleSheet.create({
    base: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 12,
    },
});

export const indicator = StyleSheet.create({
    base: {
        width: 12,
        height: 4,
        borderRadius: 2,
        backgroundColor: "#ccc",
        marginHorizontal: 4,
    },
    active: {
        backgroundColor: "#6C63FF",
        width: 24,
    },
});

export const title = StyleSheet.create({
    base: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 2,
        color: "#000",
    },
});

export const description = StyleSheet.create({
    base: {
        fontSize: 14,
        textAlign: "center",
        color: "#333",
        marginVertical: 25,
    },
});
