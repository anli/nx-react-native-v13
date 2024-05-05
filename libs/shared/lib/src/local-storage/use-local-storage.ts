import { useMMKVObject } from 'react-native-mmkv';
import { localStorage } from './local-storage';

const useLocalStorageObject = <T>(key: string) =>
  useMMKVObject<T | undefined>(key, localStorage);

export const useLocalStorage = {
  Object: useLocalStorageObject,
};
