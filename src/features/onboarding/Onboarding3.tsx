import React from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PrimaryButton from '../../shared/components/PrimaryButton';
import StepIndicator from './components/StepIndicator';

// Importando os estilos nomeados
import {
  container,
  imageContainer,
  image,
  title,
  description,
} from '../../shared/styles/onboarding';

type Onboarding3ScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Onboarding3'
>;

export default function Onboarding3() {
  const navigation = useNavigation<Onboarding3ScreenNavigationProp>();

  const handleBack = () => {
    navigation.navigate('Onboarding2');
  };

  const handleNext = () => {
    navigation.navigate('Policy');
  };

  return (
    <View style={container.base}>
      <View style={imageContainer.base}>
        <Image
          source={require('../../assets/img/onboarding-3.png')}
          style={image.base}
          resizeMode="contain"
        />
      </View>

      <StepIndicator totalSteps={3} currentStep={2} />

      <Text style={title.base}>Avalie sua experiência</Text>
      <Text style={description.base}>
        Converse diretamente com o profissional pelo chat e combine todos os
        detalhes do serviço. Negocie valores, horários e tire suas dúvidas de
        forma rápida e segura, tudo dentro do app!
      </Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <PrimaryButton
          label="Anterior"
          onPress={handleBack}
          style={{
            width: 120,
            height: 46,
            paddingVertical: 8,
            alignSelf: 'flex-end',
          }}
        />
        <PrimaryButton
          label="Próximo"
          onPress={handleNext}
          style={{
            width: 120,
            height: 46,
            paddingVertical: 8,
            alignSelf: 'flex-end',
          }}
        />
      </View>
    </View>
  );
}
