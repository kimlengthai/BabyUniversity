import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReadAloudContext = createContext();

export const ReadAloudProvider = ({ children }) => {
  const [readAloudVal, setReadAloudVal] = useState(false);

  useEffect(() => {
    const loadSetting = async () => {
      const savedSetting = await AsyncStorage.getItem('readAloudVal');
      if (savedSetting !== null) {
        setReadAloudVal(JSON.parse(savedSetting));
      }
    };

    loadSetting();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('readAloudVal', JSON.stringify(readAloudVal));
  }, [readAloudVal]);

  return (
    <ReadAloudContext.Provider value={{ readAloudVal, setReadAloudVal }}>
      {children}
    </ReadAloudContext.Provider>
  );
};

export const useReadAloud = () => useContext(ReadAloudContext);