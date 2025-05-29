import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const TABS = [
  {key: 'HomeTab', icon: 'house', label: 'início'},
  {key: 'OptionTab', icon: 'ellipsis', label: 'opções'},
  {key: 'AtividadeTab', icon: 'file', label: 'atividades'},
  {key: 'MenuTab', icon: 'bars', label: 'menu'},
] as const;

type TabKey = (typeof TABS)[number]['key'];

const BottomTabMenu: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  return (
    <View style={bottomTabMenuStyles.container}>
      {TABS.map((tab, idx) => {
        const isActive = state.index === idx;
        return (
          <TouchableOpacity
            key={tab.key}
            style={bottomTabMenuStyles.tab}
            onPress={() => {
              // Zera a pilha ao navegar para a tab
              navigation.reset({
                index: 0,
                routes: [{name: tab.key}],
              });
            }}
            activeOpacity={0.7}>
            <FontAwesome6
              name={tab.icon}
              size={32}
              style={bottomTabMenuStyles.icon}
              color={isActive ? '#6C63FF' : '#B3AEE6'}
              solid={isActive}
            />
            <Text
              style={[
                bottomTabMenuStyles.label,
                !isActive && bottomTabMenuStyles.labelInactive,
              ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const bottomTabMenuStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#FFF',
    borderTopWidth: 2,
    borderTopColor: '#6C63FF',
    paddingBottom: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginTop: 20,
    marginBottom: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 2,
    color: '#6C63FF',
    textTransform: 'lowercase',
  },
  labelInactive: {
    color: '#B3AEE6',
  },
  iconInactive: {
    color: '#B3AEE6',
  },
});

export default BottomTabMenu;
