import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";

import {
    container,
    logo,
    subtitle,
    title,
    divider,
    forgotPassword,
    registerText,
} from "@/styles/auth";
import GoogleButton from "@/components/GoogleButton";
import InputAuth from "@/components/InputAuth";
import PrimaryButton from "@/components/AuthButton";
import { ScrollView } from "react-native";

const AuthScreen = () => {
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={container.base}>
                    <Image source={require("../assets/img/authLogo.png")} style={logo.base} />
                    <Text style={title.base}>Bem vindo de volta</Text>
                    <Text style={subtitle.base}>
                        Acesse sua conta para encontrar e se conectar com os melhores profissionais da sua região.
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

                    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                        <Text style={forgotPassword.base}>
                            esqueceu a sua <Text style={{ fontWeight: "bold" }}>senha?</Text>
                        </Text>
                    </TouchableOpacity>

                    <PrimaryButton label="Entrar" onPress={() => {}} disabled={false} />

                    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                        <Text style={registerText.base}>
                            se não tiver conta <Text style={{ fontWeight: "bold" }}>registre agora!</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

export default AuthScreen;
