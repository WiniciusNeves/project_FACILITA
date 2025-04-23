import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import InputAuth from "./InputAuth";
import AuthButton from "./AuthButton";
import { modalStyles } from "@/styles/auth";
import { useNavigation } from "@react-navigation/native";

interface ModalForgotPasswordProps {
    visible: boolean;
    onClose: () => void;
}

export default function ModalForgotPassword({ visible, onClose }: ModalForgotPasswordProps) {
    const [email, setEmail] = useState("");
    const navigation = useNavigation();

    const handleSendLink = () => {
        console.log("Link enviado para:", email);
        onClose();
        navigation.navigate("RestorePassword"); // Redireciona para a tela de restauração
    };

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={modalStyles.overlay}>
                <View style={modalStyles.container}>
                    <TouchableOpacity onPress={onClose} style={modalStyles.closeButton}>
                        <Text style={modalStyles.closeText}>X</Text>
                    </TouchableOpacity>
                    <Text style={modalStyles.title}>Esqueceu sua senha?</Text>
                    <Text style={modalStyles.description}>
                        Digite seu e-mail cadastrado e enviaremos um link para redefinir sua senha. Verifique sua caixa de entrada e siga as instruções para criar uma nova senha com segurança.
                    </Text>
                    <InputAuth
                        placeholder="Email"
                        icon="email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <AuthButton label="Enviar link" onPress={handleSendLink} />
                </View>
            </View>
        </Modal>
    );
}
