import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  container,
  captionText,
  avatarImage,
  highlightedText,
} from "@/styles/auth";

import InputField from "@/components/common/InputField";
import PrimaryButton from "@/components/common/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "@/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Register"
>;

export default function Register() {
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const handleEmailVerification = () => {
    navigation.navigate("EmailVerification");
  };

  // Estados para os campos
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Estado para habilitar/desabilitar o botão
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // Função para validar os campos
  const validateFields = () => {
    const isNameValid = name.trim().length > 0;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPhoneValid = /^[0-9]{10,11}$/.test(phone);
    const isPasswordValid = password.length >= 8;
    const isConfirmPasswordValid = password === confirmPassword;

    // Habilita o botão apenas se todos os campos forem válidos
    setIsButtonEnabled(
      isNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isPasswordValid &&
        isConfirmPasswordValid
    );
  };

  // Atualiza a validação sempre que os campos mudarem
  useEffect(() => {
    validateFields();
  }, [name, email, phone, password, confirmPassword]);

  const handleLogin = () => {
    navigation.navigate("AuthScreen");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={container.base}>
          <Image
            source={require("../../assets/img/avatar1.png")}
            style={avatarImage.base}
          />
          <InputField
            placeholder="Nome"
            icon="circle-user"
            value={name}
            onChangeText={setName}
          />
          <InputField
            placeholder="E-mail"
            icon="envelope"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <InputField
            placeholder="Telefone"
            icon="phone"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
          <InputField
            placeholder="Senha"
            icon="lock"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <InputField
            placeholder="Confirmar senha"
            icon="lock"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <PrimaryButton
            label="Criar conta"
            onPress={handleEmailVerification}
            // disabled={!isButtonEnabled}
            disabled={false}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleLogin}
            style={{ alignSelf: "center" }}
          >
            <Text style={captionText.base}>
              Lembrou da sua conta?{" "}
              <Text style={highlightedText.base}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
