import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PrimaryButton from "@/components/PrimaryButton";
import { AuthStackParamList } from "@/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Importando os estilos compartilhados
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

type Onboarding2ScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Onboarding2"
>;

export default function Onboarding2() {
  const navigation = useNavigation<Onboarding2ScreenNavigationProp>();

  const handleBack = () => {
    navigation.navigate("Onboarding");
  };

  const handleNext = () => {
    navigation.navigate("Onboarding3");
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
          source={require("../../assets/img/onboarding-2.png")}
          style={image.base}
          resizeMode="contain"
        />
      </View>

      <View style={indicatorContainer.base}>
        <View style={indicator.base} />
        <View style={[indicator.base, indicator.active]} />
        <View style={indicator.base} />
      </View>

      <Text style={title.base}>Encontre a pessoa certa!</Text>
      <Text style={description.base}>
        Encontre o profissional ideal para o que você precisa. Busque por
        categorias, veja perfis detalhados e descubra quem está disponível na
        sua região. Conecte-se com facilidade e resolva seu problema sem
        complicação!
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <PrimaryButton
          label="Anterior"
          onPress={handleBack}
          style={{
            width: 120,
            height: 46,
            paddingVertical: 8,
          }}
        />
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
    </View>
  );
}
