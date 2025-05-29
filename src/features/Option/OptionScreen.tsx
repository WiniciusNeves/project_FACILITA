import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../shared/components/Header';
import OptionCard from '../../shared/components/OptionCard';

const options = [
  {
    title: 'Cadastro De Prestador De Serviço',
    color: '#7C7CFF',
    image: require('../../assets/img/prestadorServico.png'),
    size: 50,
  },
  {
    title: 'Suporte',
    color: '#4B7F6C',
    image: require('../../assets/img/suporte.png'),
    size: 80,
  },
  {
    title: 'Relatar Abuso',
    color: '#C0392B',
    image: require('../../assets/img/relatarAbuso.png'),
    size: 80,
  },
];

const userPhoto = require('../../assets/img/avatar1.png');

const OptionScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Opções" photo={userPhoto} />
      <ScrollView contentContainerStyle={styles.optionsContainer}>
        <View style={styles.row}>
          <OptionCard {...options[0]} />
          <OptionCard {...options[1]} />
        </View>
        <View style={styles.rowSingle}>
          <OptionCard {...options[2]} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FCFB',
    paddingTop: 40,
  },
  optionsContainer: {
    padding: 16,
    paddingTop: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  rowSingle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default OptionScreen;
