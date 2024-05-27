import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReadAloudContext = createContext();

export const ReadAloudProvider = ({ children }) => {
  const [readAloudVal, setReadAloudVal] = useState(false);

   // This useEffect is used to load the Read Aloud setting from AsyncStorage when the component opens
  useEffect(() => {
    const loadSetting = async () => {
      const savedSetting = await AsyncStorage.getItem('readAloudVal');
      if (savedSetting !== null) {
        setReadAloudVal(JSON.parse(savedSetting));
      }
    };

    loadSetting();
  }, []);
// This sueEffect is used to keep track of the state varibale for the readAloudVal everytime it changes
  useEffect(() => {
    AsyncStorage.setItem('readAloudVal', JSON.stringify(readAloudVal));
  }, [readAloudVal]);

  return (
    <ReadAloudContext.Provider value={{ readAloudVal, setReadAloudVal }}>
      {children}
    </ReadAloudContext.Provider>
  );
};
// Hook that is used to read teh content and is the variable that is 
//passed through each page to keep track of the state of the variable
export const useReadAloud = () => useContext(ReadAloudContext);