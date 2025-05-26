import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { storage } from "../storage";

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuthStatus = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1800)); // tempo mínimo de splash
      const userString = storage.getString("user");
      const user = userString ? JSON.parse(userString) : null;
      if (user && user.id && user.role) {
        // Ajuste para sua navegação real
        navigation.reset({
          index: 0,
          routes: [{ name: user.role === "provider" ? "HomeTab" : "HomeTab" }],
        });
      } else {
        navigation.reset({ index: 0, routes: [{ name: "AuthScreen" }] });
      }
    };
    checkAuthStatus();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <ActivityIndicator size="large" color="#333" style={styles.spinner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C63FF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 337,
    height: 337,
    resizeMode: "contain",
    marginBottom: 20,
  },
  spinner: {
    marginTop: 50,
  },
});

export default SplashScreen;
