import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import InputField from '../../shared/components/InputField';
import PrimaryButton from '../../shared/components/PrimaryButton';
import ProfileImagePicker from './components/ProfileImagePicker';
import RadioButtonGroup, {
  RadioButtonOption,
} from './components/RadioButtonGroup';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {storage} from '../../shared/utils/storage';
import {formatCpfCnpj} from '../../shared/utils/formatCpfCnpj';
import {formatPhone} from '../../shared/utils/formatPhone';
import {validateFields} from '../../shared/utils/validateFields';

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Register'
>;

const ROLE_OPTIONS: RadioButtonOption[] = [
  {label: 'Cliente', value: 'COMMON'},
  {label: 'Autônomo', value: 'PROVIDER'},
];

export default function Register() {
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  // Estados para os campos
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('COMMON');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  // Campos extras para autônomo
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  // Estado para habilitar/desabilitar o botão
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  // Estado para mensagens de erro/caption
  const [caption, setCaption] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const result = validateFields({
      name,
      email,
      phone,
      whatsapp,
      password,
      confirmPassword,
      role,
      cpfCnpj,
      dateOfBirth,
      address,
    });
    setIsButtonEnabled(result.valid);
    setCaption(result.message);
  }, [
    name,
    email,
    phone,
    whatsapp,
    password,
    confirmPassword,
    role,
    cpfCnpj,
    dateOfBirth,
    address,
  ]);

  // Substituir navegação para dashboards por navegação para Main
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }
    const newUser = {
      id: Math.floor(Math.random() * 1000) + 3,
      name,
      email,
      phone,
      whatsapp,
      role,
      profile_picture:
        profileImage && profileImage.length > 0 ? profileImage : undefined, // Salva como undefined se não houver imagem
    };
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      storage.set('user', JSON.stringify(newUser));
      if (role === 'PROVIDER') {
        const newProvider = {
          userId: newUser.id,
          cpfCnpj,
          dateOfBirth,
          address,
          description,
        };
        storage.set(`provider_${newUser.id}`, JSON.stringify(newProvider));
      }
      Alert.alert('Sucesso', 'Conta criada com sucesso!');
      // Redireciona para a tela principal (Main), que abre o TabNavigator
      const parentNav = navigation.getParent && navigation.getParent();
      if (parentNav && parentNav.reset) {
        parentNav.reset({index: 0, routes: [{name: 'Main'}]});
      } else if ((navigation as any).reset) {
        (navigation as any).reset({index: 0, routes: [{name: 'Main'}]});
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao registrar. Tente novamente.');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <ProfileImagePicker onImageChange={setProfileImage} />
          <InputField
            placeholder="Nome Completo"
            value={name}
            onChangeText={setName}
            icon="circle-user"
          />
          <InputField
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            icon="envelope"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <InputField
            placeholder="Telefone (com DDD)"
            value={formatPhone(phone)}
            onChangeText={v => setPhone(v.replace(/\D/g, '').slice(0, 11))}
            icon="phone"
            keyboardType="phone-pad"
            maxLength={15}
          />
          <InputField
            placeholder="WhatsApp (com DDD)"
            value={formatPhone(whatsapp)}
            onChangeText={v => setWhatsapp(v.replace(/\D/g, '').slice(0, 11))}
            icon="whatsapp"
            keyboardType="phone-pad"
            maxLength={15}
          />
          <InputField
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            icon="lock"
            secureTextEntry
          />
          <InputField
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            icon="lock"
            secureTextEntry
          />
          {caption ? <Text style={styles.captionText}>{caption}</Text> : null}
          <Text style={styles.roleLabel}>Eu sou:</Text>
          <RadioButtonGroup
            options={ROLE_OPTIONS}
            value={role}
            onChange={setRole}
          />
          {role === 'PROVIDER' && (
            <View style={styles.providerFields}>
              <Text style={styles.providerFieldsTitle}>
                Informações de Autônomo:
              </Text>
              <InputField
                placeholder="CPF ou CNPJ"
                value={formatCpfCnpj(cpfCnpj)}
                onChangeText={v =>
                  setCpfCnpj(v.replace(/\D/g, '').slice(0, 14))
                }
                icon="id-card"
                keyboardType="number-pad"
                maxLength={18}
              />
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <InputField
                  placeholder="Data de Nascimento (DD/MM/AAAA)"
                  value={dateOfBirth}
                  onChangeText={setDateOfBirth}
                  icon="calendar"
                  editable={false}
                />
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={
                    dateOfBirth
                      ? new Date(dateOfBirth.split('/').reverse().join('-'))
                      : new Date()
                  }
                  mode="date"
                  display="default"
                  onChange={(event, selectedDate) => {
                    setShowDatePicker(false);
                    if (selectedDate) {
                      const d = selectedDate;
                      const formatted = `${String(d.getDate()).padStart(
                        2,
                        '0',
                      )}/${String(d.getMonth() + 1).padStart(
                        2,
                        '0',
                      )}/${d.getFullYear()}`;
                      setDateOfBirth(formatted);
                    }
                  }}
                />
              )}
              <InputField
                placeholder="Endereço Completo"
                value={address}
                onChangeText={setAddress}
                icon="location-dot"
              />
              <InputField
                placeholder="Descrição profissional (ex: Especialista em hidráulica)"
                value={description}
                onChangeText={setDescription}
                icon="user-gear"
                inputStyle={{minHeight: 100}}
                textAlignVertical="top"
              />
            </View>
          )}
          <PrimaryButton
            label="Cadastrar"
            onPress={handleRegister}
            disabled={!isButtonEnabled}
            style={{width: 200, marginTop: 20}}
          />
          <TouchableOpacity
            onPress={() => (navigation as any).navigate('AuthScreen')}>
            <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    alignSelf: 'center',
  },
  roleLabel: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
    marginTop: 8,
    alignSelf: 'center',
  },
  providerFields: {
    width: '100%',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#E6E6FA',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D8BFD8',
  },
  providerFieldsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#4B0082',
  },
  linkText: {
    color: '#6A5ACD',
    fontSize: 16,
    marginTop: 10,
    alignSelf: 'center',
  },
  captionText: {
    color: '#C0392B',
    fontSize: 14,
    marginBottom: 8,
    marginLeft: 4,
  },
});
