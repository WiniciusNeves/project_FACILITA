// src/screens/Onboarding.tsx
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NextButton from "../components/NextButton";
import Icon from "react-native-vector-icons/MaterialIcons";
import BackButton from "../components/BackButton";


export default function Onboarding() {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate("Onboarding2");
    };
    const handleNext = () => {
        navigation.navigate("Policy");
    };




    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/img/onboarding-3.png")}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.indicatorContainer}>
                <View style={styles.indicator} />
                <View style={styles.indicator} />
                <View style={[styles.indicator, styles.activeIndicator]} />
            </View>

            <Text style={styles.title}>Avalie sua esperiência</Text>
            <Text style={styles.description}>
                Converse diretamente com o profissional pelo chat e combine todos os detalhes do serviço. Negocie valores, horários e tire suas dúvidas de forma rápida e segura, tudo dentro do app!
            </Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <BackButton onPress={handleBack} />
                <NextButton onPress={handleNext} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingVertical: 24,
        paddingHorizontal: 16,
        justifyContent: "center",
    },
    skipContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 16,
    },
    skipText: {
        color: "#6C63FF",
        fontWeight: "600",
    },
    arrow: {
        color: "#6C63FF",
        fontSize: 16,
        marginLeft: 4,
    },
    imageContainer: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignSelf: "flex-start",
    },
    image: {
        width: 370,
        height: 290,
        marginTop: 16,
    },
    indicatorContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 12,
    },
    indicator: {
        width: 12,
        height: 4,
        borderRadius: 2,
        backgroundColor: "#ccc",
        marginHorizontal: 4,
    },
    activeIndicator: {
        backgroundColor: "#6C63FF",
        width: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 2,
        color: "#000",
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        color: "#333",
        marginVertical: 25,
    },
    icon: {
        marginLeft: 4,
    },
});

