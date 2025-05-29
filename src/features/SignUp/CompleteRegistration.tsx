import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputField from '../../shared/components/InputField';
import PrimaryButton from '../../shared/components/PrimaryButton';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Tag from '../../shared/components/Tag';
import ProfessionSelectModal from '../ClientDashboard/components/ProfessionSelectModal';
import {jobTagTemplates} from '../../shared/utils/jobTagTemplates';
import {
  container,
  subtitle,
  avatarImage,
  highlightedText,
  inputContainer,
} from '../../shared/styles/auth';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type CompleteRegistrationScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'CompleteRegistration'
>;

export default function CompleteRegistration() {
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
  const [modalProfVisible, setModalProfVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigation = useNavigation<CompleteRegistrationScreenNavigationProp>();

  const professions = [
    'Encanador',
    'Jardineiro',
    'Mecânico',
    'Motoboy',
    'Pedreiro',
    'Eletricista',
    'Pintor',
    'Diarista',
    'Babá',
    'Cozinheiro',
  ];

  const toggleProfession = (profession: string) => {
    if (selectedProfessions.includes(profession)) {
      setSelectedProfessions(
        selectedProfessions.filter(item => item !== profession),
      );
    } else {
      setSelectedProfessions([...selectedProfessions, profession]);
    }
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setBirthDate(selectedDate);
    }
  };

  const handleCompleteRegistration = () => {
    console.log('Registration completed with:', {
      cpfCnpj,
      birthDate,
      selectedProfessions,
    });
    navigation.navigate('AuthScreen');
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={container.base}>
          <Image
            source={require('../../assets/img/avatar1.png')}
            style={avatarImage.base}
          />
          <Text style={subtitle.base}>
            Você pode{' '}
            <Text style={highlightedText.base}>adicionar mais informações</Text>{' '}
            ao seu perfil para se destacar como contador.{' '}
            <Text style={highlightedText.base}>
              Mantenha seus dados atualizados e aumente suas chances de ser
              contratado!
            </Text>
          </Text>

          <InputField
            placeholder="CPF/CNPJ"
            icon="id-card"
            value={cpfCnpj}
            onChangeText={setCpfCnpj}
          />
          <Text style={{color: 'red', fontSize: 14, marginBottom: 16}}>
            Se você não possui uma empresa cadastrada como MEI ou Simples
            Nacional, basta manter o seu CPF registrado.
          </Text>

          {/* Botão para abrir o modal */}
          <TouchableOpacity
            style={[inputContainer.base, {padding: 12}]}
            onPress={() => setModalProfVisible(true)}>
            <Text style={{color: selectedProfessions.length ? '#000' : '#999'}}>
              {selectedProfessions.length
                ? selectedProfessions.join(', ')
                : 'Selecione suas capacidades'}
            </Text>
          </TouchableOpacity>

          {/* Tags das profissões selecionadas */}
          <View
            style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16}}>
            {selectedProfessions.map(profession => {
              const tagTemplate = jobTagTemplates.find(
                t => t.label === profession,
              );
              return (
                <Tag
                  key={profession}
                  label={profession}
                  color={tagTemplate ? tagTemplate.color : '#6C63FF'}
                  style={{marginRight: 8, marginBottom: 8}}
                />
              );
            })}
          </View>

          {/* Modal para seleção de profissões */}
          <ProfessionSelectModal
            visible={modalProfVisible}
            professions={professions}
            selectedProfessions={selectedProfessions}
            onToggle={toggleProfession}
            onClose={() => setModalProfVisible(false)}
          />

          {/* Campo de data com calendário */}
          <TouchableOpacity
            style={inputContainer.base}
            onPress={() => setShowDatePicker(true)}>
            <Icon name="calendar" size={24} color="#6C63FF" />
            <Text
              style={{
                marginLeft: 8,
                color: birthDate ? '#000' : '#999',
                fontSize: 16,
              }}>
              {birthDate
                ? birthDate.toLocaleDateString('pt-BR')
                : 'Data de nascimento ou cadastro da empresa'}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={birthDate || new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          <PrimaryButton
            label="Atualizar"
            onPress={handleCompleteRegistration}
            disabled={
              !cpfCnpj || !birthDate || selectedProfessions.length === 0
            }
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
