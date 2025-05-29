import {MMKV} from 'react-native-mmkv';

// Cria uma instância global do MMKV para armazenamento local
export const storage = new MMKV({
  id: 'user-storage', // ID único para o armazenamento
  // path: `${Dirs.CacheDir}/mmkv/user-storage`, // Opcional: caminho customizado no Android
  // encryptionKey: 'some_encryption_key_if_needed', // Opcional: criptografia
});
