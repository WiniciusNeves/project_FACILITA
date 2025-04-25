import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import Onboarding from './src/screens/onboarding/Onboarding';
import Onboarding2 from './src/screens/onboarding/Onboarding2';
import Onboarding3 from './src/screens/onboarding/Onboarding3';
import Policy from './src/screens/Policy';
import AuthScreen from './src/screens/Auth';
import RestorePassword from '@/screens/RestorePassword';
import Register from '@/screens/Register/Register';
import EmailVerification from '@/screens/Register/EmailVerification';
import CompleteRegistration from '@/screens/Register/CompleteRegistration';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="App" component={App} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} options={{ headerShown: false }} />
        <Stack.Screen name="Policy" component={Policy} options={{ headerShown: false }} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RestorePassword" component={RestorePassword} options={{ headerShown: true, headerTitle: "Restaure sua conta" }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: true, headerTitle: "Crie sua conta" }} />
        <Stack.Screen name="EmailVerification" component={EmailVerification} options={{ headerShown: true, headerTitle: "Verifique seu e-mail" }} />
        <Stack.Screen name="CompleteRegistration" component={CompleteRegistration} options={{ headerShown: true, headerTitle: "Complete seu cadastro" }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}