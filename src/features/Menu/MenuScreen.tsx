import React from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import OptionCard from '../../shared/components/OptionCard';
import {useNavigation} from '@react-navigation/native';
import {container} from '../../shared/styles/auth';
import PrimaryButton from '../../shared/components/PrimaryButton';
import {storage} from '../../shared/utils/storage';

export default function MenuScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert('Sair', 'Você tem certeza que deseja sair?', [
      {text: 'Cancelar', style: 'cancel'},
      {
        text: 'Sair',
        onPress: () => {
          storage.delete('user');
          navigation.navigate('AuthScreen');
        },
      },
    ]);
  };

  return (
    <ScrollView>
      <View style={container.base}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 30,
            textAlign: 'center',
            color: '#333',
          }}>
          Menu
        </Text>
        <OptionCard
          title="Editar Perfil"
          color="#6C63FF"
          image={require('../../assets/img/avatar1.png')}
          onPress={() => navigation.navigate('EditProfileScreen')}
        />
        <OptionCard
          title="Histórico de Serviços"
          color="#4B0082"
          image={require('../../assets/img/suporte.png')}
          onPress={() => {}}
        />

        <PrimaryButton
          label="Sair da conta"
          onPress={handleLogout}
          style={{backgroundColor: '#C0392B', marginTop: 32, marginBottom: 12}}
        />
      </View>
    </ScrollView>
  );
}
