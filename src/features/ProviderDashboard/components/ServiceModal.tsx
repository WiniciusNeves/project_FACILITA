import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import PrimaryButton from '../../../shared/components/PrimaryButton';
import {Category} from '../../../shared/types/Category';
import {Service} from '../../../shared/types/Service';

interface ServiceModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (service: Service) => void;
  onDelete?: () => void;
  categories: Category[];
  initialData?: Partial<Service>;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  visible,
  onClose,
  onSave,
  onDelete,
  categories,
  initialData = {},
}) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [categoryId, setCategoryId] = useState(
    initialData.category?.id || categories[0]?.id,
  );

  useEffect(() => {
    if (visible) {
      setTitle(initialData.title || '');
      setDescription(initialData.description || '');
      setCategoryId(initialData.category?.id || categories[0]?.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const handleSave = () => {
    if (!title.trim() || !description.trim() || !categoryId) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }
    const selectedCategory = categories.find(cat => cat.id === categoryId);
    if (!selectedCategory) {
      return;
    }

    onSave({
      id: initialData.id || Date.now(),
      title,
      description,
      createdAt: initialData.createdAt || new Date(),
      category: selectedCategory,
    } as Service);
    onClose();
  };

  const handleDelete = () => {
    Alert.alert(
      'Excluir Serviço',
      'Tem certeza que deseja excluir este serviço?',
      [
        {text: 'Cancelar', style: 'cancel'},
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => onDelete && onDelete(),
        },
      ],
    );
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>
            {initialData.id ? 'Editar Serviço' : 'Novo Serviço'}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Título do serviço"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Descrição"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={3}
          />
          <View style={styles.pickerContainer}>
            <Text style={styles.label}>Categoria:</Text>
            <View style={styles.picker}>
              {categories.map(cat => (
                <TouchableOpacity
                  key={cat.id}
                  style={[
                    styles.categoryOption,
                    categoryId === cat.id && styles.categoryOptionSelected,
                  ]}
                  onPress={() => setCategoryId(cat.id)}>
                  <Text
                    style={{
                      color: categoryId === cat.id ? '#fff' : '#333',
                      fontWeight: categoryId === cat.id ? 'bold' : 'normal',
                    }}>
                    {cat.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <PrimaryButton label="Salvar" onPress={handleSave} />
          {onDelete && (
            <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
              <Text style={styles.deleteText}>Excluir Serviço</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 18,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  pickerContainer: {
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  picker: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryOption: {
    backgroundColor: '#E6E6FA',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 8,
    marginBottom: 8,
  },
  categoryOptionSelected: {
    backgroundColor: '#6A5ACD',
  },
  cancelBtn: {
    marginTop: 10,
    alignItems: 'center',
  },
  cancelText: {
    color: '#6A5ACD',
    fontWeight: 'bold',
    fontSize: 16,
  },
  deleteBtn: {
    marginTop: 10,
    alignItems: 'center',
  },
  deleteText: {
    color: '#C0392B',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ServiceModal;
