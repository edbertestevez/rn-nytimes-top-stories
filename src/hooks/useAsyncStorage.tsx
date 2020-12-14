import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorage = async (key: string, initialValue?: string) => {
  const [keyValue, setKeyValue] = useState(initialValue);

  useEffect(() => {
    AsyncStorage.getItem(key)
      .then((value) => {
        if (value === null) {
          return initialValue;
        }

        return JSON.parse(value);
      })
      .then(setKeyValue);
  }, [key, initialValue]);

  const setValue = async (rawValue: any) => {
    let value =
      typeof rawValue === 'string' ? rawValue : JSON.stringify(rawValue);

    await AsyncStorage.setItem(key, value);
  };

  return [keyValue, setValue];
};

export default useAsyncStorage;
