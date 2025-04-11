import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";
import {
    container,
    avatar,
    avatarImage,
    avatarPlaceholder,
    loginText,
    linkText,
} from "../../styles/register";

export default function Register() {
    const navigation = useNavigation();
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            Alert.alert(
                "Permissão negada",
                "Precisamos da permissão para acessar a galeria."
            );
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.uri);
        }
    };

    const handleSubmit = () => {
        console.log("Form submitted!");
    };

    return (
        <View style={container.base}>
            <TouchableOpacity onPress={pickImage} style={avatar.base}>
                {image ? (
                    <Image source={{ uri: image }} style={avatarImage.base} />
                ) : (
                    <View style={avatarPlaceholder.base}>
                        <Text style={{ fontSize: 24 }}>+</Text>
                    </View>
                )}
            </TouchableOpacity>

            <InputField icon="person" placeholder="Nome" />
            <InputField icon="mail" placeholder="Email" />
            <InputField icon="call" placeholder="Telefone" />
            <InputField icon="key" placeholder="Senha" secureTextEntry />
            <InputField
                icon="key"
                placeholder="Confirmar nova Senha"
                secureTextEntry
            />

            <SubmitButton text="Criar" onPress={handleSubmit} />

            <Text style={loginText.base}>
                lembrou da sua conta?{" "}
                <Text style={linkText.base} onPress={() => navigation.navigate("Login")}>
                    Login
                </Text>
            </Text>
        </View>
    );
}

