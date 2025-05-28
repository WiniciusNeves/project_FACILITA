import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Alert, FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import Header from '../../components/common/Header';
import SearchInput from '../../components/common/SearchInput';
import ProfessionTagsList from '../../components/common/ProfessionTagsList';
import {storage} from '../../storage';
import {Role, User} from '../../types/User';
import PrimaryButton from '../../components/common/PrimaryButton';
import ProfessionSelectModal from '../../components/common/ProfessionSelectModal';
import {jobTagTemplates} from '../../utils/templates/jobTagTemplates';
import UserCardMini from '../../components/common/UserCardMini';
import UserModal from '../../components/common/UserModal';

export default function ClientDashboardScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProfVisible, setModalProfVisible] = useState(false);
  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [modalUser, setModalUser] = useState<any | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Carregar informações do usuário logado
    const userString = storage.getString('user');
    if (userString) {
      const user: User = JSON.parse(userString);
      setCurrentUser(user);
      // Redireciona para dashboard correto se não for cliente
      if (user.role === Role.PROVIDER) {
        (navigation as any).reset &&
          (navigation as any).reset({
            index: 0,
            routes: [{name: 'ProviderDashboardScreen'}],
          });
      }
    }

    // Mock de prestadores de serviço
    setProviders([
      {
        id: 1,
        name: 'Maria Eletricista',
        tags: ['Eletricista', 'Pintor'],
        photoUrl: undefined,
        description: 'Especialista em instalações elétricas residenciais.',
      },
      {
        id: 2,
        name: 'João Encanador',
        tags: ['Encanador'],
        photoUrl: undefined,
        description: 'Atendo emergências e reformas.',
      },
      {
        id: 3,
        name: 'Ana Diarista',
        tags: ['Diarista', 'Babá'],
        photoUrl: undefined,
        description: 'Limpeza e organização de casas e escritórios.',
      },
      {
        id: 4,
        name: 'Carlos Jardineiro',
        tags: ['Jardineiro'],
        photoUrl: undefined,
        description: 'Cuido do seu jardim com carinho.',
      },
      {
        id: 5,
        name: 'Pedro Motoboy',
        tags: ['Motoboy'],
        photoUrl: undefined,
        description: 'Entregas rápidas e seguras.',
      },
    ]);
  }, [navigation]);

  // Filtro de prestadores
  const filteredProviders = providers.filter(provider => {
    // Filtro por tags selecionadas
    const tagMatch =
      selectedProfessions.length === 0 ||
      provider.tags.some(tag => selectedProfessions.includes(tag));
    // Filtro por busca
    const searchLower = searchQuery.trim().toLowerCase();
    const searchMatch =
      !searchLower ||
      provider.name.toLowerCase().includes(searchLower) ||
      provider.tags.some(tag => tag.toLowerCase().includes(searchLower));
    return tagMatch && searchMatch;
  });

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigation.navigate('SearchResults', {query: searchQuery});
    } else {
      Alert.alert('Atenção', 'Digite algo para buscar!');
    }
  };

  const handleProfilePress = () => {
    navigation.navigate('EditProfile');
  };

  const handleLogout = () => {
    Alert.alert('Sair', 'Você tem certeza que deseja sair?', [
      {text: 'Cancelar', style: 'cancel'},
      {
        text: 'Sair',
        onPress: () => {
          storage.delete('user');
          navigation.replace('AuthScreen');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Header
        title={`Olá, ${currentUser?.name?.split(' ')[0] || ''}!`}
        photo={
          currentUser?.profile_picture ||
          require('../../assets/img/avatar1.png')
        }
      />
      <View style={styles.innerContainer}>
        <SearchInput value={searchQuery} onChangeText={setSearchQuery} />
        <ProfessionTagsList
          onAllPress={() => setModalProfVisible(true)}
          onTagPress={tagLabel =>
            setSelectedProfessions(prev =>
              prev.includes(tagLabel)
                ? prev.filter((t: string) => t !== tagLabel)
                : [...prev, tagLabel],
            )
          }
          maxToShow={5}
          selectedTags={selectedProfessions}
        />
        <ProfessionSelectModal
          visible={modalProfVisible}
          professions={jobTagTemplates.map(t => t.label)}
          selectedProfessions={selectedProfessions}
          onToggle={prof =>
            setSelectedProfessions(prev =>
              prev.includes(prof)
                ? prev.filter((p: string) => p !== prof)
                : [...prev, prof],
            )
          }
          onClose={() => setModalProfVisible(false)}
        />
        <View style={styles.divider} />
        <FlatList
          data={filteredProviders}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <UserCardMini
              name={item.name}
              tags={item.tags.map((label: string) => {
                const found = jobTagTemplates.find(t => t.label === label);
                return found || {label, color: '#6C63FF'};
              })}
              photoUrl={item.photoUrl}
              onMoreInfo={() => {
                setModalUser(item);
                setModalVisible(true);
              }}
              style={{marginBottom: 8} as any}
            />
          )}
          ListEmptyComponent={
            <Text style={{textAlign: 'center', marginTop: 24} as any}>
              Nenhum prestador encontrado.
            </Text>
          }
          contentContainerStyle={{paddingBottom: 24} as any}
        />
        <PrimaryButton
          label="Sair da conta"
          onPress={handleLogout}
          style={styles.logoutButton}
        />
        {/* Modal de detalhes do prestador */}
        <UserModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          name={modalUser?.name || ''}
          specialty={modalUser?.tags?.join(', ') || ''}
          description={modalUser?.description || ''}
          rating={modalUser?.rating || 5}
          photoUrl={modalUser?.photoUrl}
          onAction={() => {}}
          actionLabel="Contratar"
          onProfile={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    paddingTop: 40,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 6,
  },
  logoutButton: {
    backgroundColor: '#C0392B',
    marginTop: 32,
    marginBottom: 12,
  },
});
