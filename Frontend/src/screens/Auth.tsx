import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
} from "react-native";
import InputField from "@/components/common/InputField";
import PrimaryButton from "@/components/common/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { storage } from "@/storage";
import { Role, User } from "@/types/User";
import {
  container,
  logo,
  subtitle,
  title,
  divider,
  forgotPassword,
  captionText,
} from "@/styles/auth";
import GoogleButton from "@/components/GoogleButton";
import ModalForgotPassword from "@/components/ModalForgotPassword";
import ModalSuccess from "@/components/ModalSuccess";
import { ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList, MainStackParamList } from "@/navigation/types";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "AuthScreen"
>;

type MainScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  "Home"
>;

type AuthScreenRouteParams = {
  params?: {
    showSuccessModal?: boolean;
  };
};

const AuthScreen = () => {
  const route = useRoute<RouteProp<AuthScreenRouteParams>>();
  const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const mainNavigation = useNavigation<MainScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (route.params?.showSuccessModal) {
      setSuccessVisible(true);
    }
  }, [route.params]);

  const handleLogin = async () => {
    setLoading(true);
    // Simulação de autenticação com dados mockados
    if (email === "cliente@teste.com" && password === "123456") {
      const user: User = {
        id: 1,
        name: "Cliente Teste",
        email: "cliente@teste.com",
        phone: "11999998888",
        whatsapp: "11999998888",
        role: Role.COMMON,
        profile_picture: "https://example.com/client_pic.jpg",
      };
      storage.set("user", JSON.stringify(user));
      Alert.alert("Sucesso", "Login de cliente realizado!");
      // Redireciona para a stack principal (Main) usando o parent navigator
      const parentNav = navigation.getParent && navigation.getParent();
      if (parentNav && parentNav.reset) {
        parentNav.reset({ index: 0, routes: [{ name: "Main" }] });
      } else if ((navigation as any).reset) {
        (navigation as any).reset({ index: 0, routes: [{ name: "Main" }] });
      }
    } else if (email === "autonomo@teste.com" && password === "123456") {
      const user: User = {
        id: 2,
        name: "Autônomo Teste",
        email: "autonomo@teste.com",
        phone: "11988887777",
        whatsapp: "11988887777",
        role: Role.PROVIDER,
        profile_picture: "https://example.com/provider_pic.jpg",
      };
      storage.set("user", JSON.stringify(user));
      Alert.alert("Sucesso", "Login de autônomo realizado!");
      // Redireciona para a stack principal (Main) usando o parent navigator
      const parentNav = navigation.getParent && navigation.getParent();
      if (parentNav && parentNav.reset) {
        parentNav.reset({ index: 0, routes: [{ name: "Main" }] });
      } else if ((navigation as any).reset) {
        (navigation as any).reset({ index: 0, routes: [{ name: "Main" }] });
      }
    } else {
      Alert.alert("Erro", "E-mail ou senha incorretos.");
    }
    setLoading(false);
  };

  const handleForgotPassword = (email: string) => {
    console.log("E-mail enviado para:", email);
    setSuccessVisible(true);
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[container.base, { paddingTop: 60 }]}>
          <Image
            source={require("../assets/img/authLogo.png")}
            style={logo.base}
          />
          <Text style={title.base}>Bem vindo de volta</Text>
          <Text style={subtitle.base}>
            Acesse sua conta para encontrar e se conectar com os melhores
            profissionais da sua região. Se ainda não tem uma conta, cadastre-se
            em poucos passos e comece agora mesmo!
          </Text>

          <GoogleButton />

          <Text style={divider.base}>OU</Text>

          <InputField
            placeholder="Email"
            icon="envelope"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <InputField
            placeholder="Senha"
            icon="lock"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setForgotPasswordVisible(true)}
            style={{ alignSelf: "flex-end" }}
          >
            <Text style={forgotPassword.base}>
              esqueceu a sua <Text style={{ fontWeight: "bold" }}>senha?</Text>
            </Text>
          </TouchableOpacity>

          <PrimaryButton
            label={loading ? "Entrando..." : "Entrar"}
            onPress={handleLogin}
            disabled={loading}
            style={styles.button}
          />

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleRegister}
            style={{ alignSelf: "center" }}
          >
            <Text style={captionText.base}>
              se não tiver conta{" "}
              <Text style={{ fontWeight: "bold" }}>registre agora!</Text>
            </Text>
          </TouchableOpacity>

          <ModalForgotPassword
            visible={forgotPasswordVisible}
            onClose={() => setForgotPasswordVisible(false)}
            onSubmit={handleForgotPassword}
          />

          <ModalSuccess
            visible={successVisible}
            onClose={() => setSuccessVisible(false)}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F0F0F0",
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  button: {
    width: "100%",
    marginTop: 10,
    marginBottom: 20,
  },
  linkText: {
    color: "#6A5ACD",
    fontSize: 16,
    marginTop: 10,
  },
});

export default AuthScreen;
