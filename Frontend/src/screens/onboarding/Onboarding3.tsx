import React from "react";
import {
    View,
    Text,
    Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NextButton from "../../components/NextButton";
import Icon from "react-native-vector-icons/MaterialIcons";
import BackButton from "../../components/BackButton";

// Importando os estilos nomeados
import {
    container,
    imageContainer,
    image,
    indicatorContainer,
    indicator,
    title,
    description,
} from "../../styles/onboarding";

export default function Onboarding3() {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate("Onboarding2");
    };

    const handleNext = () => {
        navigation.navigate("Policy");
    };

    return (
        <View style={container.base}>
            <View style={imageContainer.base}>
                <Image
                    source={require("../../assets/img/onboarding-3.png")}
                    style={image.base}
                    resizeMode="contain"
                />
            </View>

            <View style={indicatorContainer.base}>
                <View style={indicator.base} />
                <View style={indicator.base} />
                <View style={[indicator.base, indicator.active]} />
            </View>

            <Text style={title.base}>Avalie sua experiência</Text>
            <Text style={description.base}>
                Converse diretamente com o profissional pelo chat e combine todos os detalhes do serviço. Negocie valores, horários e tire suas dúvidas de forma rápida e segura, tudo dentro do app!
            </Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <BackButton onPress={handleBack} />
                <NextButton onPress={handleNext} />
            </View>
        </View>
    );
}
