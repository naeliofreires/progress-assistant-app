import AsyncStorage from '@react-native-async-storage/async-storage';
import { StoreProviderType } from '../../store';

const key = '@storage/store/app';

async function setStore(store: StoreProviderType) {
  try {
    const storeJSON = JSON.stringify(store);

    await AsyncStorage.setItem(key, storeJSON);
  } catch (error) {
    throw new Error(`Error to set the store[${key}]: ${error}`);
  }
}

async function getStore(): Promise<StoreProviderType | null> {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value) {
      return JSON.parse(value) as StoreProviderType;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(`Error to get the store[${key}]: ${e}`);
  }
}
export const StorageUtil = {
  setStore,
  getStore,
  clear: async () => AsyncStorage.clear(),
};
