// src/navigation/AppNavigator.tsx
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthStackParamList} from './types';
import BottomTabMenu from '../shared/components/BottomTabMenu';

// Importação das telas de autenticação
import Onboarding from '../features/onboarding/Onboarding';
import Onboarding2 from '../features/onboarding/Onboarding2';
import Onboarding3 from '../features/onboarding/Onboarding3';
import Policy from '../features/Policy/PolicyScreen';
import AuthScreen from '../features/Login/LoginScreen';
import RestorePassword from '../features/Login/RestorePassword';
import Register from '../features/SignUp/SignupScreen';
import EmailVerification from '../features/SignUp/EmailVerification';
import CompleteRegistration from '../features/SignUp/CompleteRegistration';
import SplashScreen from '../features/Splash/SplashScreen';

// Futuro: telas principais do app
import ClientDashboardScreen from '../features/ClientDashboard/ClientDashboardScreen';
import ProviderDashboardScreen from '../features/ProviderDashboard/ProviderDashboardScreen';
import Option from '../features/Option/OptionScreen';
import AtividadeScreen from '../features/Atividade/AtividadeScreen';
import MenuScreen from '../features/Menu/MenuScreen';
import EditProfileScreen from '../features/EditProfile/EditProfileScreen';
import {SafeAreaView} from 'react-native-safe-area-context';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const HomeStack = createNativeStackNavigator();
const OptionStack = createNativeStackNavigator();
const AtividadeStack = createNativeStackNavigator();
const MenuStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Onboarding2" component={Onboarding2} />
      <AuthStack.Screen name="Onboarding3" component={Onboarding3} />
      <AuthStack.Screen name="Policy" component={Policy} />
      <AuthStack.Screen name="AuthScreen" component={AuthScreen} />
      <AuthStack.Screen
        name="RestorePassword"
        component={RestorePassword}
        options={{headerShown: true, title: 'Restaurar conta'}}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: true, title: 'Criar conta'}}
      />
      <AuthStack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={{headerShown: true, title: 'Verificar o endereço de email'}}
      />
      <AuthStack.Screen
        name="CompleteRegistration"
        component={CompleteRegistration}
        options={{headerShown: true, title: 'Completar Cadastro'}}
      />
    </AuthStack.Navigator>
  );
}

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name="ClientDashboardScreen"
        component={ClientDashboardScreen}
      />
      <HomeStack.Screen
        name="ProviderDashboardScreen"
        component={ProviderDashboardScreen}
      />
      {/* Adicione outras telas internas do Home aqui */}
    </HomeStack.Navigator>
  );
}

function OptionStackNavigator() {
  return (
    <OptionStack.Navigator screenOptions={{headerShown: false}}>
      <OptionStack.Screen name="Option" component={Option} />
      {/* Adicione outras telas internas do Option aqui */}
    </OptionStack.Navigator>
  );
}

function AtividadeStackNavigator() {
  return (
    <AtividadeStack.Navigator screenOptions={{headerShown: false}}>
      <AtividadeStack.Screen name="Atividade" component={AtividadeScreen} />
      {/* Adicione outras telas internas do Atividade aqui */}
    </AtividadeStack.Navigator>
  );
}

function MenuStackNavigator() {
  return (
    <MenuStack.Navigator screenOptions={{headerShown: false}}>
      <MenuStack.Screen name="Menu" component={MenuScreen} />
      <MenuStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
      />
    </MenuStack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTabMenu {...props} />}>
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="OptionTab" component={OptionStackNavigator} />
      <Tab.Screen name="AtividadeTab" component={AtividadeStackNavigator} />
      <Tab.Screen name="MenuTab" component={MenuStackNavigator} />
    </Tab.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#6C63FF" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#6C63FF'}}>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Splash" component={SplashScreen} />
          <RootStack.Screen name="AuthScreen" component={AuthNavigator} />
          <RootStack.Screen name="Main" component={MainTabNavigator} />
        </RootStack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppNavigator;
