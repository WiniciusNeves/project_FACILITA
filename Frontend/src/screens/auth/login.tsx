import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import InputAuth from "../../components/InputAuth";
import GoogleButton from "../../components/GoogleButton";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import {
    container,
    logo,
    subtitle,
    divider,
    forgotPassword,
    footerText,
    linkText,
} from "../../styles/login";

export default function LoginScreen() {
    const navigation = useNavigation();

    const handleLogin = () => {


    };
    const handleRegister = () => {
        navigation.navigate("Register");
    };
    const handleForgotPassword = () => {
        navigation.navigate("ForgotPassword");
    };
    const handleGoogleLogin = () => {
        
    };

    return (
        <ScrollView contentContainerStyle={container.base}>
            <Image
                source={require("../../assets/img/logoBranco.png")}
                style={logo.base}
                resizeMode="contain"
            />
            <Text style={subtitle.base}>
                Acesse sua conta para encontrar os melhores profissionais da sua região.
                Se ainda não tem uma conta, cadastre-se em poucos passos e comece agora mesmo!
            </Text>

            <GoogleButton />

            <Text style={divider.base}>OU</Text>

            <InputAuth
                placeholder="Email"
                icon="email"
                keyboardType="email-address"
            />
            <InputAuth
                placeholder="Senha"
                icon="lock"
                secureTextEntry
            />

            <TouchableOpacity style={forgotPassword.base}>
                <Text style={linkText.base}>esqueceu a sua senha?</Text>
            </TouchableOpacity>

            <PrimaryButton label="Entrar" onPress={() => { }} />

            <TouchableOpacity>
                <Text style={footerText.base}>
                    se nao tiver conta <Text style={linkText.base}>registre agora!</Text>
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
