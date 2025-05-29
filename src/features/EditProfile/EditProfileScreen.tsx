import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import ProfileImagePicker from '../SignUp/components/ProfileImagePicker';
import InputField from '../../shared/components/InputField';
import PrimaryButton from '../../shared/components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {storage} from '../../shared/utils/storage';
import {User, Role} from '../../shared/types/User';
import {Provider} from '../../shared/types/Provider';
import {formatPhone} from '../../shared/utils/formatPhone';
import {formatCpfCnpj} from '../../shared/utils/formatCpfCnpj';
import {container} from '../../shared/styles/auth';

export default function EditProfileScreen() {
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentProvider, setCurrentProvider] = useState<Provider | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  // Campos de provider
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const userString = storage.getString('user');
    if (userString) {
      const user: User = JSON.parse(userString);
      setCurrentUser(user);
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setWhatsapp(user.whatsapp);
      setProfilePicture(user.profile_picture || null);
      if (user.role === Role.PROVIDER) {
        const providerString = storage.getString(`provider_${user.id}`);
        if (providerString) {
          const provider: Provider = JSON.parse(providerString);
          setCurrentProvider(provider);
          setCpfCnpj(provider.cpfCnpj);
          setDateOfBirth(provider.dateOfBirth);
          setAddress(provider.address);
          setDescription(provider.description);
        }
      }
    }
  }, []);

  const handleSave = () => {
    if (!currentUser) {
      return;
    }
    const updatedUser: User = {
      ...currentUser,
      name,
      phone,
      whatsapp,
      profile_picture: profilePicture || undefined,
    };
    storage.set('user', JSON.stringify(updatedUser));
    if (currentUser.role === Role.PROVIDER) {
      const updatedProvider: Provider = {
        ...(currentProvider || {
          userId: currentUser.id,
          cpfCnpj: '',
          dateOfBirth: '',
          address: '',
          description: '',
        }),
        cpfCnpj,
        dateOfBirth,
        address,
        description,
      };
      storage.set(
        `provider_${currentUser.id}`,
        JSON.stringify(updatedProvider),
      );
    }
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    navigation.goBack();
  };

  if (!currentUser) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Carregando perfil...</Text>
      </View>
    );
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={container.base}>
          <ProfileImagePicker onImageChange={setProfilePicture} />
          <InputField
            label="Nome Completo"
            value={name}
            onChangeText={setName}
          />
          <InputField
            label="E-mail"
            value={email}
            onChangeText={() => {}}
            editable={false}
          />
          <InputField
            label="Telefone"
            value={formatPhone(phone)}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <InputField
            label="WhatsApp"
            value={formatPhone(whatsapp)}
            onChangeText={setWhatsapp}
            keyboardType="phone-pad"
          />
          {currentUser.role === Role.PROVIDER && (
            <>
              <InputField
                label="CPF ou CNPJ"
                value={formatCpfCnpj(cpfCnpj)}
                onChangeText={setCpfCnpj}
                keyboardType="numeric"
              />
              <InputField
                label="Data de Nascimento"
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
                placeholder="DD/MM/AAAA"
              />
              <InputField
                label="Endereço"
                value={address}
                onChangeText={setAddress}
              />
              <InputField
                label="Descrição Profissional"
                value={description}
                onChangeText={setDescription}
                inputStyle={{minHeight: 80}}
                textAlignVertical="top"
              />
            </>
          )}
          <PrimaryButton label="Salvar Alterações" onPress={handleSave} />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
