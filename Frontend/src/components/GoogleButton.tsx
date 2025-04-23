import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { googleButton } from "../styles/login";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function GoogleButton() {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={googleButton.base}
    >
      <View style={googleButton.content}>
          <Image 
              source={require("../assets/img/googleIcon.png")} 
              style={googleButton.iconImage}
          />
          <View style={googleButton.verticalLine} />
          <Text style={googleButton.text}>Entrar pela conta do google</Text>
      </View>
    </TouchableOpacity>
  );
}

