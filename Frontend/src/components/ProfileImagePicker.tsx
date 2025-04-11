import React, { useState } from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import Icon from "react-native-vector-icons/Feather";
import { profileImageContainer, profileImage } from "../styles/components/signup.js";

export default function ProfileImagePicker() {
    const [imageUri, setImageUri] = useState(null);

    const openOptions = () => {
        Alert.alert("Foto de Perfil", "Escolha uma opção", [
            { text: "Câmera", onPress: handleOpenCamera },
            { text: "Galeria", onPress: handleOpenGallery },
            { text: "Cancelar", style: "cancel" },
        ]);
    };

    const handleOpenCamera = async () => {
        const result = await launchCamera({ mediaType: "photo" });
        if (result?.assets?.length) {
            setImageUri(result.assets[0].uri);
        }
    };

    const handleOpenGallery = async () => {
        const result = await launchImageLibrary({ mediaType: "photo" });
        if (result?.assets?.length) {
            setImageUri(result.assets[0].uri);
        }
    };

    return (
        <TouchableOpacity onPress={openOptions} style={profileImageContainer.base}>
            {imageUri ? (
                <Image source={{ uri: imageUri }} style={profileImage.base} />
            ) : (
                <View style={profileImage.base}>
                    <Icon name="user" size={48} color="#999" />
                </View>
            )}
        </TouchableOpacity>
    );
}
