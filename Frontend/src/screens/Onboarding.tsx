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


export default function Onboarding() {
    const navigation = useNavigation();
    const handleNext = () => {
        navigation.navigate("Onboarding2");
    };
    const handleSkip = () => {
        navigation.navigate("Policy");
    };



    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSkip} style={styles.skipContainer}>
                <Text style={styles.skipText}>Pular tutorial</Text>
                <Icon name="arrow-forward-ios" size={16} color="#6C63FF" style={styles.icon} />
            </TouchableOpacity>

            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/img/onboarding-1.png")}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.indicatorContainer}>
                <View style={[styles.indicator, styles.activeIndicator]} />
                <View style={styles.indicator} />
                <View style={styles.indicator} />
            </View>

            <Text style={styles.title}>Bem-vindo ao FACILITA!</Text>
            <Text style={styles.description}>
                Aqui você encontra profissionais qualificados da sua região de forma
                rápida e fácil. Busque pelo serviço que precisa, converse diretamente
                com o prestador e escolha com base em avaliações reais. Tudo isso em um
                jeito simples e acessível. Vamos começar?
            </Text>

            <NextButton onPress={handleNext} />
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

