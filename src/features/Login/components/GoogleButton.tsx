import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {googleButton} from '../../../shared/styles/auth';

export default function GoogleButton() {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={googleButton.base}
      activeOpacity={0.7}
      onPressIn={() => {}}>
      <View style={googleButton.content}>
        <Image
          source={require('../../../assets/img/googleIcon.png')}
          style={googleButton.iconImage}
        />
        <View style={googleButton.verticalLine} />
        <Text style={googleButton.text}>Entrar pela conta do google</Text>
      </View>
    </TouchableOpacity>
  );
}
