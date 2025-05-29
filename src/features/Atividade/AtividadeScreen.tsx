import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import Header from '../../shared/components/Header';
import ActivityFeedbackCard from './components/ActivityFeedbackCard';
import UserCardFeedback from '../../shared/components/UserCardFeedback';

const mockUser = {
  name: 'Ronando Jubileu',
  tags: [
    {label: 'Eletricista', color: '#3D2176'},
    {label: 'Cozinheiro', color: '#1A8C8C'},
    {label: 'Camioneiro', color: '#A37A00'},
  ],
  photoUrl: undefined,
  onMoreInfo: () => {},
};

export default function AtividadeScreen() {
  return (
    <View style={styles.container}>
      <Header
        title="Atividades Recentes"
        photo={require('../../assets/img/avatar1.png')}
      />
      <Text style={styles.contratadosTitle}>Contratados</Text>
      <ScrollView contentContainerStyle={{padding: 8, marginTop: -30}}>
        <ActivityFeedbackCard user={mockUser} onSave={() => {}} />
        <UserCardFeedback
          name="Julio Cavo"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet interdu"
          rating={4}
          photoUrl={undefined}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
  },
  contratadosTitle: {
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 16,
  },
});
