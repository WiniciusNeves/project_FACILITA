import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import LoginScreen from '../LoginScreen';
import {storage} from '../../../shared/utils/storage';
import {Alert} from 'react-native';

jest.mock('../../../shared/utils/storage');
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
    replace: jest.fn(),
    reset: jest.fn(),
  }),
  useRoute: () => ({params: {}}),
}));
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  return Object.setPrototypeOf(
    {
      Alert: {alert: jest.fn()},
    },
    RN,
  );
});

describe('LoginScreen', () => {
  beforeEach(() => {
    (storage.set as jest.Mock).mockClear();
    (storage.getString as jest.Mock).mockClear();
    (Alert.alert as jest.Mock).mockClear();
  });

  it('deve mostrar erro se email ou senha estiverem vazios', async () => {
    const {getByText} = render(<LoginScreen />);
    fireEvent.press(getByText('Entrar'));
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('Erro', expect.any(String));
    });
  });

  it('deve logar cliente e navegar para ClientDashboard', async () => {
    (storage.getString as jest.Mock).mockReturnValue(null);
    const {getByPlaceholderText, getByText} = render(<LoginScreen />);
    fireEvent.changeText(getByPlaceholderText('Email'), 'cliente@teste.com');
    fireEvent.changeText(getByPlaceholderText('Senha'), '123456');
    fireEvent.press(getByText('Entrar'));
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('Sucesso', expect.any(String));
      expect(storage.set).toHaveBeenCalledWith(
        'user',
        expect.stringContaining('common'),
      );
    });
  });

  it('deve logar provider e navegar para ProviderDashboard', async () => {
    (storage.getString as jest.Mock).mockReturnValue(null);
    const {getByPlaceholderText, getByText} = render(<LoginScreen />);
    fireEvent.changeText(getByPlaceholderText('Email'), 'autonomo@teste.com');
    fireEvent.changeText(getByPlaceholderText('Senha'), '123456');
    fireEvent.press(getByText('Entrar'));
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('Sucesso', expect.any(String));
      expect(storage.set).toHaveBeenCalledWith(
        'user',
        expect.stringContaining('provider'),
      );
    });
  });

  it('deve navegar para Register ao clicar em Cadastre-se', () => {
    const {getByText} = render(<LoginScreen />);
    fireEvent.press(getByText(/registre agora!/i));
    expect(mockNavigate).toHaveBeenCalledWith('Register');
  });
});
