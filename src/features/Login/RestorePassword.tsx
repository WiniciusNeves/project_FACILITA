import React, {useState} from 'react';
import {View, Text} from 'react-native';
import InputField from '../../shared/components/InputField';
import PrimaryButton from '../../shared/components/PrimaryButton';
import {
  container,
  subtitle,
  highlightedText,
  bulletList,
} from '../../shared/styles/auth';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RestorePasswordScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'RestorePassword'
>;

export default function RestorePassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation<RestorePasswordScreenNavigationProp>();

  // Estados para os requisitos da senha
  const [requirements, setRequirements] = useState({
    minLength: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  // Função para validar a senha
  const validatePassword = (password: string) => {
    setRequirements({
      minLength: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%&*]/.test(password),
    });
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    validatePassword(text);
  };

  const handleSubmit = () => {
    if (password === confirmPassword) {
      console.log('Senha redefinida com sucesso!');
      navigation.navigate('AuthScreen', {showSuccessModal: true}); // Redireciona para Auth com o modal visível
    } else {
      console.log('As senhas não coincidem.');
    }
  };

  return (
    <View style={container.base}>
      <Text style={subtitle.base}>
        Crie uma nova senha para acessar sua conta com segurança. Certifique-se
        de escolher uma senha forte,{' '}
        <Text style={highlightedText.base}>
          com pelo menos 8 caracteres, incluindo letras, números e símbolos.
        </Text>
      </Text>
      <InputField
        placeholder="Senha"
        icon="lock"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
      {/* Bullet list de requisitos */}
      <View style={bulletList.base}>
        <Text
          style={[
            bulletList.bulletItem,
            requirements.minLength && bulletList.valid,
          ]}>
          • Deve ter pelo menos 8 caracteres
        </Text>
        <Text
          style={[
            bulletList.bulletItem,
            requirements.uppercase && bulletList.valid,
          ]}>
          • Deve conter pelo menos 1 letra maiúscula
        </Text>
        <Text
          style={[
            bulletList.bulletItem,
            requirements.number && bulletList.valid,
          ]}>
          • Deve conter pelo menos 1 número
        </Text>
        <Text
          style={[
            bulletList.bulletItem,
            requirements.specialChar && bulletList.valid,
          ]}>
          • Deve conter pelo menos 1 caractere especial (!@#$%&*)
        </Text>
      </View>
      <InputField
        placeholder="Confirmar nova senha"
        icon="lock"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <PrimaryButton label="Próximo" onPress={handleSubmit} />
    </View>
  );
}
