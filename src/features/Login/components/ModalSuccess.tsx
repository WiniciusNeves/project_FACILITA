import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import AuthButton from '../../../shared/components/PrimaryButton';
import {modalStyles} from '../../../shared/styles/auth';

interface ModalSuccessProps {
  visible: boolean;
  onClose: () => void;
}

export default function ModalSuccess({visible, onClose}: ModalSuccessProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={modalStyles.overlay}>
        <View style={modalStyles.container}>
          <TouchableOpacity onPress={onClose} style={modalStyles.closeButton}>
            <Text style={modalStyles.closeText}>X</Text>
          </TouchableOpacity>
          <Text style={modalStyles.title}>Tudo certo!</Text>
          <Text style={modalStyles.description}>
            Sua senha foi redefinida com sucesso! Agora você pode acessar sua
            conta normalmente e continuar encontrando os melhores profissionais
            da sua região.
          </Text>
          <AuthButton label="Voltar para o início" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}
