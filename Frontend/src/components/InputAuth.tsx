import React from "react";
import { View, TextInput, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import { inputContainer } from "../styles/auth";

interface InputAuthProps extends React.ComponentProps<typeof TextInput> {
    placeholder: string;
    icon: string;
    secureTextEntry?: boolean;
}

export default function InputAuth({ placeholder, icon: iconName, secureTextEntry, ...rest }: InputAuthProps) {
    let textInputRef = React.useRef<TextInput>(null);

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                textInputRef.current?.focus(); // Foca no TextInput ao clicar no contêiner
            }}
        >
            <View style={inputContainer.base}>
                <Icon name={iconName} size={24} color="#6C63FF" />
                <TextInput
                    ref={textInputRef} // Referência ao TextInput
                    style={inputContainer.inputField}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    {...rest}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}
