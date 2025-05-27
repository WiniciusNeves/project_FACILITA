// src/navigation/AppNavigator.tsx
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthStackParamList } from "./types";
import BottomTabMenu from "../components/common/BottomTabMenu";

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
import SplashScreen from "../screens/SplashScreen";

// Futuro: telas principais do app
import Home from "../screens/Home/Home";
import Option from "../screens/Option/Option";
import AtividadeScreen from "../screens/Atividade/Atividade";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const HomeStack = createNativeStackNavigator();
const OptionStack = createNativeStackNavigator();
const AtividadeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

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
        options={{ headerShown: true, title: "Restaurar conta" }}
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

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      {/* Adicione outras telas internas do Home aqui */}
    </HomeStack.Navigator>
  );
}

function OptionStackNavigator() {
  return (
    <OptionStack.Navigator screenOptions={{ headerShown: false }}>
      <OptionStack.Screen name="Option" component={Option} />
      {/* Adicione outras telas internas do Option aqui */}
    </OptionStack.Navigator>
  );
}

function AtividadeStackNavigator() {
  return (
    <AtividadeStack.Navigator screenOptions={{ headerShown: false }}>
      <AtividadeStack.Screen name="Atividade" component={AtividadeScreen} />
      {/* Adicione outras telas internas do Atividade aqui */}
    </AtividadeStack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomTabMenu {...props} />}
    >
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="OptionTab" component={OptionStackNavigator} />
      <Tab.Screen name="AtividadeTab" component={AtividadeStackNavigator} />
      {/* Adicione outras abas aqui, se necessário */}
    </Tab.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#6C63FF" />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen name="AuthScreen" component={AuthNavigator} />
        <RootStack.Screen name="Main" component={MainTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
