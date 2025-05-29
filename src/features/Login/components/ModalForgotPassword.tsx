import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import InputField from '../../../shared/components/InputField';
import AuthButton from '../../../shared/components/PrimaryButton';
import {modalStyles} from '../../../shared/styles/auth';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'RestorePassword'
>;

interface ModalForgotPasswordProps {
  visible: boolean;
  onClose: () => void;
  onSubmit?: (email: string) => void;
}

export default function ModalForgotPassword({
  visible,
  onClose,
}: ModalForgotPasswordProps) {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleModalClose = () => {
    Keyboard.dismiss();
    onClose();
  };

  const handleSubmitLink = () => {
    Keyboard.dismiss();
    console.log('Link enviado para:', email);
    onClose(); // Chama o onClose original passado como prop
    navigation.navigate('RestorePassword'); // Redireciona para a tela de restauração
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleModalClose} // Para o botão "voltar" do Android
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={modalStyles.inner} // Permite que o KAV gerencie o espaço
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={modalStyles.overlay}>
            {/* Envolve o container do modal para evitar que o toque nele dispare o Keyboard.dismiss */}
            <View
              style={modalStyles.container}
              onStartShouldSetResponder={() => true} // Impede que o toque propague para o dismisser
            >
              <TouchableOpacity
                onPress={handleModalClose}
                style={modalStyles.closeButton}>
                <Text style={modalStyles.closeText}>X</Text>
              </TouchableOpacity>
              <Text style={modalStyles.title}>Esqueceu sua senha?</Text>
              <Text style={modalStyles.description}>
                Digite seu e-mail cadastrado e enviaremos um link para redefinir
                sua senha. Verifique sua caixa de entrada e siga as instruções
                para criar uma nova senha com segurança.
              </Text>
              <InputField
                placeholder="Digite seu e-mail"
                icon="envelope"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
              <AuthButton label="Enviar link" onPress={handleSubmitLink} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
}
