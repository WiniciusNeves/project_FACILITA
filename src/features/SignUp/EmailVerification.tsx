import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {container, subtitle, highlightedText} from '../../shared/styles/auth';
import {useNavigation} from '@react-navigation/native';
import EmailCodeInput from './components/EmailCodeInput';

export default function EmailVerification() {
  const navigation = useNavigation();
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleVerifyEmail = (code: string) => {
    console.log('Code entered:', code);
    navigation.navigate('CompleteRegistration');
  };

  const handleResendCode = () => {
    if (canResend) {
      console.log('Resending code...');
      setTimer(60);
      setCanResend(false);
    }
  };

  return (
    <View style={container.base}>
      <Text style={subtitle.base}>
        <Text style={highlightedText.base}>
          Enviamos um código de confirmação para o seu e-mail.
        </Text>{' '}
        Digite o código abaixo para verificar sua conta e concluir o processo de
        cadastro.{' '}
        <Text style={highlightedText.base}>
          Caso não encontre o e-mail, verifique a caixa de spam ou solicite um
          novo código.
        </Text>
      </Text>

      <EmailCodeInput onComplete={handleVerifyEmail} />

      <TouchableOpacity onPress={handleResendCode} disabled={!canResend}>
        <Text
          style={[
            subtitle.base,
            {color: canResend ? '#6C63FF' : '#999', fontWeight: 'bold'},
          ]}>
          Não chegou o email? Enviar novamente
        </Text>
      </TouchableOpacity>

      <Text style={[subtitle.base, {textAlign: 'center', marginTop: 8}]}>
        Tempo: {Math.floor(timer / 60)}:
        {(timer % 60).toString().padStart(2, '0')}
      </Text>
    </View>
  );
}
