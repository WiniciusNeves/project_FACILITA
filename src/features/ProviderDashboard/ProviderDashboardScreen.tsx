// src/screens/Home/ProviderDashboardScreen.tsx
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {storage} from '../../shared/utils/storage';
import {User} from '../../shared/types/User';
import {Service} from '../../shared/types/Service';
import {Provider as ProviderType} from '../../shared/types/Provider';
import Header from '../../shared/components/Header';
import {useCurrentUser} from '../../shared/hooks/useCurrentUser';

export default function ProviderDashboardScreen() {
  const navigation = useNavigation();
  const user = useCurrentUser();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentProvider, setCurrentProvider] = useState<ProviderType | null>(
    null,
  );
  const [services, setServices] = useState<Service[]>([]);
  const [averageRating, setAverageRating] = useState<number>(0);

  useEffect(() => {
    const loadUserData = () => {
      const userString = storage.getString('user');
      if (userString) {
        const user: User = JSON.parse(userString);
        setCurrentUser(user);
        if (user.role === 'provider') {
          const providerString = storage.getString(`provider_${user.id}`);
          if (providerString) {
            setCurrentProvider(JSON.parse(providerString));
          } else {
            setCurrentProvider({
              userId: user.id,
              cpfCnpj: '000.000.000-00',
              dateOfBirth: '01/01/1990',
              address: 'Rua Exemplo, 123',
              description:
                'Prestador de serviços gerais com 10 anos de experiência.',
            });
          }
        }
      }
    };

    const loadProviderServices = () => {
      const mockServices: Service[] = [
        {
          id: 101,
          title: 'Instalação Elétrica',
          description:
            'Instalação e manutenção de sistemas elétricos residenciais.',
          createdAt: new Date(),
          category: {id: 2, name: 'Eletricista'},
        },
        {
          id: 102,
          title: 'Conserto de Vazamentos',
          description: "Reparos em torneiras, tubulações e caixas d'água.",
          createdAt: new Date(),
          category: {id: 1, name: 'Encanador'},
        },
        {
          id: 103,
          title: 'Montagem de Móveis',
          description: 'Montagem de móveis novos e desmontagem para mudança.',
          createdAt: new Date(),
          category: {id: 9, name: 'Montador'},
        },
      ];
      setServices(mockServices);
    };

    const loadAverageRating = () => {
      setAverageRating(4.7);
    };

    loadUserData();
    loadProviderServices();
    loadAverageRating();
  }, []);

  const handleAddService = () => {
    // navigation.navigate('AddEditService');
    Alert.alert(
      'Novo Serviço',
      'Funcionalidade de adicionar serviço em breve!',
    );
  };

  const handleViewService = (service: Service) => {
    // navigation.navigate('ServiceDetail', { serviceId: service.id });
    Alert.alert('Serviço', `Visualizar serviço: ${service.title}`);
  };

  const handleViewAllReviews = () => {
    // navigation.navigate('ProviderReviews');
    Alert.alert('Avaliações', 'Funcionalidade de avaliações em breve!');
  };

  const handleViewServiceHistory = () => {
    // navigation.navigate('ProviderServiceHistory');
    Alert.alert('Histórico', 'Funcionalidade de histórico em breve!');
  };

  const renderServiceItem = ({item}: {item: Service}) => (
    <TouchableOpacity
      style={styles.serviceCard}
      onPress={() => handleViewService(item)}>
      <Text style={styles.serviceCardTitle}>{item.title}</Text>
      <Text style={styles.serviceCardCategory}>{item.category.name}</Text>
      <Text style={styles.serviceCardDescription} numberOfLines={2}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Header
        title={user ? `Olá, ${user.name.split(' ')[0]}!` : 'Dashboard'}
        photo={
          user?.profile_picture
            ? {uri: user.profile_picture}
            : require('../../assets/img/avatar1.png')
        }
      />

      {/* Seção de Resumo/Ações Rápidas */}
      <View style={styles.summarySection}>
        <View style={styles.ratingBox}>
          <Text style={styles.ratingValue}>{averageRating.toFixed(1)} ⭐</Text>
          <TouchableOpacity onPress={handleViewAllReviews}>
            <Text style={styles.ratingLink}>Ver Avaliações</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionColumn}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleAddService}>
            <Text style={styles.actionButtonText}>+ Adicionar Serviço</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleViewServiceHistory}>
            <Text style={styles.actionButtonText}>Histórico de Serviços</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require('../../assets/img/anuncio.png')}
        style={{width: '100%', height: 200, marginBottom: 20}}
        resizeMode="contain"
      />
      {/* Meus Serviços */}
      <Text style={styles.sectionTitle}>Meus Serviços Cadastrados</Text>
      {services.length > 0 ? (
        <FlatList
          data={services}
          renderItem={renderServiceItem}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.servicesListContent}
        />
      ) : (
        <Text style={styles.noServicesText}>
          Nenhum serviço cadastrado ainda. Comece adicionando um!
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFF',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  greetingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  providerDescription: {
    fontSize: 14,
    color: '#666',
    maxWidth: 200,
  },
  summarySection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  ratingBox: {
    alignItems: 'center',
  },
  ratingValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6A5ACD',
  },
  ratingLink: {
    color: '#6A5ACD',
    fontSize: 14,
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  actionColumn: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 10,
  },
  actionButton: {
    backgroundColor: '#E6E6FA',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: 180,
  },
  actionButtonText: {
    color: '#4B0082',
    fontWeight: 'bold',
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  servicesListContent: {
    paddingHorizontal: 15,
  },
  serviceCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginRight: 15,
    width: 200,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  serviceCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  serviceCardCategory: {
    fontSize: 14,
    color: '#6A5ACD',
    marginBottom: 5,
  },
  serviceCardDescription: {
    fontSize: 13,
    color: '#666',
  },
  noServicesText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  logoutButton: {
    backgroundColor: '#C0392B',
    marginTop: 32,
    marginBottom: 12,
  },
});
