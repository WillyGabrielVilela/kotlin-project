// storage.ts

import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para obter o próximo ID sequencial
export const getNextId = async (): Promise<string> => {
  try {
    const id = await AsyncStorage.getItem('nextId');
    if (id === null) {
      await AsyncStorage.setItem('nextId', '1');
      return '1';
    } else {
      const nextId = parseInt(id, 10) + 1;
      await AsyncStorage.setItem('nextId', nextId.toString());
      return nextId.toString();
    }
  } catch (error: any) {
    throw new Error('Error getting next ID from AsyncStorage: ' + error.message);
  }
};

// Função para salvar os dados no AsyncStorage
export const saveData = async (key: string, data: any[]) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error: any) {
    throw new Error('Error saving data to AsyncStorage: ' + error.message);
  }
};

// Função para recuperar os dados do AsyncStorage
export const getData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data != null ? JSON.parse(data) : null;
  } catch (error: any) {
    throw new Error('Error getting data from AsyncStorage: ' + error.message);
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data:', error);
  }
};
