import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../shared/components/Header';
import OptionCard from '../../shared/components/OptionCard';
import {useCurrentUser} from '../../shared/hooks/useCurrentUser';

const options = {
  title: 'Relatar Abuso',
  color: '#C0392B',
  image: require('../../assets/img/relatarAbuso.png'),
  size: 80,
};

const OptionScreen = () => {
  const user = useCurrentUser();

  return (
    <View style={styles.container}>
      <Header
        title={user ? `Olá, ${user.name.split(' ')[0]}!` : 'Opções'}
        photo={
          user?.profile_picture
            ? {uri: user.profile_picture}
            : require('../../assets/img/avatar1.png')
        }
      />
      <ScrollView contentContainerStyle={styles.optionsContainer}>
        <View style={styles.row}>
          <OptionCard {...options} />
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
    justifyContent: 'flex-start',
  },
});

export default OptionScreen;
