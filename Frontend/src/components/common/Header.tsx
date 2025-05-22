import React from "react";
import { View, Text, Image } from "react-native";
import { headerStyles } from "./Header.style";
import { SafeAreaView } from "react-native-safe-area-context";

interface HeaderProps {
  title: string;
  photo: any;
}

const Header: React.FC<HeaderProps> = ({ title, photo }) => {
  return (
    <SafeAreaView>
      <View style={headerStyles.container}>
        <View style={headerStyles.row}>
          <Text style={headerStyles.title}>{title}</Text>
          <View style={headerStyles.avatarCircle}>
            <Image source={photo} style={headerStyles.avatarImg} />
          </View>
        </View>
        <Image
          source={require("../../assets/img/arrow.png")}
          style={headerStyles.arrowImg}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;
