// src/navigation/AppNavigator.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList, MainStackParamList } from "./types";

// Importação das telas de autenticação
import Onboarding from "../screens/onboarding/Onboarding";
import Onboarding2 from "../screens/onboarding/Onboarding2";
import Onboarding3 from "../screens/onboarding/Onboarding3";
import Policy from "../screens/Policy";
import AuthScreen from "../screens/Auth";
import RestorePassword from "../screens/RestorePassword";
import Register from "../screens/Register/Register";
import EmailVerification from "../screens/Register/EmailVerification";
import CompleteRegistration from "../screens/Register/CompleteRegistration";

// Futuro: telas principais do app
// import Home from "../screens/Home";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const MainStack = createNativeStackNavigator<MainStackParamList>();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Onboarding2" component={Onboarding2} />
      <AuthStack.Screen name="Onboarding3" component={Onboarding3} />
      <AuthStack.Screen name="Policy" component={Policy} />
      <AuthStack.Screen name="AuthScreen" component={AuthScreen} />
      <AuthStack.Screen
        name="RestorePassword"
        component={RestorePassword}
        options={{ headerShown: true, title: "Restraurar conta" }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: true, title: "Criar conta" }}
      />
      <AuthStack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={{ headerShown: true, title: "Verificar o endereço de email" }}
      />
      <AuthStack.Screen
        name="CompleteRegistration"
        component={CompleteRegistration}
        options={{ headerShown: true, title: "Completar Cadastro" }}
      />
    </AuthStack.Navigator>
  );
}

function MainNavigator() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      {/* <MainStack.Screen name="Home" component={Home} /> */}
    </MainStack.Navigator>
  );
}

const AppNavigator = () => {
  // Aqui você pode adicionar lógica de autenticação futuramente
  // Exemplo: const isLoggedIn = useAuth();
  const isLoggedIn = false; // Troque para lógica real futuramente
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
