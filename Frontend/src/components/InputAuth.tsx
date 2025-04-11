import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { inputContainer, inputField, icon } from "../styles/login";

interface InputAuthProps extends React.ComponentProps<typeof TextInput> {
    placeholder: string;
    icon: string;
    secureTextEntry?: boolean;

}
export default function InputAuth({ placeholder, icon: iconName, secureTextEntry, ...rest }: InputAuthProps) {
    return (
        <View style={inputContainer.base}>
            <Icon name={iconName} size={20} color="#6C63FF" style={icon.base} />
            <TextInput
                style={inputField.base}
                placeholder={placeholder}
                placeholderTextColor="#999"
                secureTextEntry={secureTextEntry}
                {...rest}
            />
        </View>
    );
}
