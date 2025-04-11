import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { googleButton } from "../styles/login";
import Icon from "react-native-vector-icons/FontAwesome";

export default function GoogleButton() {
  return (
    <TouchableOpacity style={googleButton.base}>
      <Icon name="google" size={20} color="#fff" style={{ marginRight: 8 }} />
      <Text style={googleButton.text}>Entrar pela conta do google</Text> 
    </TouchableOpacity>
  );
}

