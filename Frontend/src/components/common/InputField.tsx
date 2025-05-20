import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleProp,
  ViewStyle,
  TextInputProps,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import { inputField } from "./InputField.style";

export type InputFieldProps = {
  label?: string;
  placeholder?: string;
  icon?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps["keyboardType"];
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  autoCapitalize?: TextInputProps["autoCapitalize"];
  editable?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  icon,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  style,
  inputStyle,
  autoCapitalize = "none",
  editable = true,
}) => {
  return (
    <View style={[inputField.container, style]}>
      {label && <Text style={inputField.label}>{label}</Text>}
      <View style={inputField.inputWrapper}>
        {icon && (
          <Icon name={icon} size={20} color="#6C63FF" style={inputField.icon} />
        )}
        <TextInput
          style={[inputField.input, inputStyle]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          editable={editable}
          placeholderTextColor="#B0AEE0"
        />
      </View>
    </View>
  );
};

export default InputField;
