import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Para navegação
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined; // Define 'Home' as a valid route with no parameters
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
console.log(process.env.API_URL);

export default function App() {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    // Simula o carregamento e navega para outra tela após 3 segundos
    const timer = setTimeout(() => {
      navigation.navigate('Home'); // Substitua 'Home' pelo nome da sua próxima tela
    }, 3000);

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