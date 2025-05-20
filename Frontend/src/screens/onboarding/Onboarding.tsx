import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "@/components/PrimaryButton";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthStackParamList } from "@/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Importando cada estilo de forma individual
import {
  container,
  skipContainer,
  skipText,
  icon,
  imageContainer,
  image,
  indicatorContainer,
  indicator,
  title,
  description,
} from "../../styles/onboarding";

type OnboardingScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Onboarding"
>;

export default function Onboarding() {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const handleNext = () => {
    navigation.navigate("Onboarding2");
  };

  const handleSkip = () => {
    navigation.navigate("Policy");
  };

  return (
    <View style={container.base}>
      <TouchableOpacity onPress={handleSkip} style={skipContainer.base}>
        <Text style={skipText.base}>Pular tutorial</Text>
        <Icon
          name="arrow-forward-ios"
          size={16}
          color="#6C63FF"
          style={icon.base}
        />
      </TouchableOpacity>

      <View style={imageContainer.base}>
        <Image
          source={require("../../assets/img/onboarding-1.png")}
          style={image.base}
          resizeMode="contain"
        />
      </View>

      <View style={indicatorContainer.base}>
        <View style={[indicator.base, indicator.active]} />
        <View style={indicator.base} />
        <View style={indicator.base} />
      </View>

      <Text style={title.base}>Bem-vindo ao FACILITA!</Text>
      <Text style={description.base}>
        Aqui você encontra profissionais qualificados da sua região de forma
        rápida e fácil. Busque pelo serviço que precisa, converse diretamente
        com o prestador e escolha com base em avaliações reais. Tudo isso em um
        jeito simples e acessível. Vamos começar?
      </Text>

      <PrimaryButton
        label="Próximo"
        onPress={handleNext}
        style={{
          width: 120,
          height: 46,
          paddingVertical: 8,
          alignSelf: "flex-end",
        }}
      />
    </View>
  );
}
