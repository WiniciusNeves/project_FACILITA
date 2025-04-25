import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Para navegação
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Onboarding: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;


export default function App() {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    // Simula o carregamento e navega para outra tela após 3 segundos
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 1000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <ActivityIndicator size="large" color="#000" style={styles.loading} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
  },
  loading: {
    marginTop: 20, // Espaço entre o logo e o indicador de carregamento
  },
});