import React from 'react';
import {
  Modal,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

interface ProfessionSelectModalProps {
  visible: boolean;
  professions: string[];
  selectedProfessions: string[];
  onToggle: (profession: string) => void;
  onClose: () => void;
}

const ProfessionSelectModal: React.FC<ProfessionSelectModalProps> = ({
  visible,
  professions,
  selectedProfessions,
  onToggle,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <FlatList
            data={professions}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[
                  styles.option,
                  selectedProfessions.includes(item) && styles.optionSelected,
                ]}
                onPress={() => onToggle(item)}>
                <Text
                  style={[
                    styles.optionText,
                    selectedProfessions.includes(item) &&
                      styles.optionTextSelected,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  optionSelected: {
    backgroundColor: '#6C63FF',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  optionTextSelected: {
    color: '#FFF',
  },
  closeButton: {
    marginTop: 16,
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#6C63FF',
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default ProfessionSelectModal;
