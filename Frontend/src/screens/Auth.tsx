import React, { useState, useEffect } from "react";
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
    captionText,
} from "@/styles/auth";
import GoogleButton from "@/components/GoogleButton";
import InputAuth from "@/components/InputAuth";
import PrimaryButton from "@/components/PrimaryButton";
import ModalForgotPassword from "@/components/ModalForgotPassword";
import ModalSuccess from "@/components/ModalSuccess";
import { ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

type AuthScreenRouteParams = {
    params?: {
        showSuccessModal?: boolean;
    };
};

const AuthScreen = () => {
    const route = useRoute<RouteProp<AuthScreenRouteParams>>();
    const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);
    const [successVisible, setSuccessVisible] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        if (route.params?.showSuccessModal) {
            setSuccessVisible(true);
        }
    }, [route.params]);

    const handleForgotPassword = (email: string) => {
        console.log("E-mail enviado para:", email);
        setSuccessVisible(true);
    };

    const handleRegister = () => {
        navigation.navigate("Register");
    }

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[container.base, {paddingTop: 60}]}>
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
                        icon="envelope"
                        keyboardType="email-address"
                    />

                    <InputAuth
                        placeholder="Senha"
                        icon="lock"
                        secureTextEntry
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

                    <PrimaryButton label="Entrar" onPress={() => {}} disabled={false} />

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={handleRegister}
                        style={{ alignSelf: "center" }}
                    >
                        <Text style={captionText.base}>
                            se não tiver conta <Text style={{ fontWeight: "bold" }}>registre agora!</Text>
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

export default AuthScreen;
