jest.mock('../storage', () => ({
  storage: {
    getString: jest.fn(),
    set: jest.fn(),
    delete: jest.fn(),
  },
}));

import {storage} from '../storage';

beforeEach(() => {
  (storage.getString as jest.Mock).mockClear();
  (storage.set as jest.Mock).mockClear();
  (storage.delete as jest.Mock).mockClear();
});

describe('MMKV Storage', () => {
  test('deve colocar e obter um valor', () => {
    (storage.getString as jest.Mock).mockReturnValue('abc');
    storage.set('key', 'abc');
    expect(storage.set).toHaveBeenCalledWith('key', 'abc');
    expect(storage.getString('key')).toBe('abc');
  });

  test('deve deletar um valor', () => {
    storage.delete('key');
    expect(storage.delete).toHaveBeenCalledWith('key');
  });

  test('deve retornar null para chave inexistente', () => {
    (storage.getString as jest.Mock).mockReturnValue(null);
    const result = storage.getString('naoExiste');
    expect(storage.getString).toHaveBeenCalledWith('naoExiste');
    expect(result).toBeNull();
  });

  test('deve salvar e recuperar um objeto JSON', () => {
    const obj = {id: 1, nome: 'Teste'};
    const objStr = JSON.stringify(obj);
    (storage.getString as jest.Mock).mockReturnValue(objStr);
    storage.set('obj', objStr);
    expect(storage.set).toHaveBeenCalledWith('obj', objStr);
    const result = storage.getString('obj');
    expect(JSON.parse(result || '{}')).toEqual(obj);
  });
});
