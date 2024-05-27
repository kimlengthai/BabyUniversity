import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { auth } from './firebase'; 
import ParentUI from './ParentUI/ParentUI';
import phyDoodleShapes from '../front-end/assets/BgImage/doodle.png';
import { useFonts, Itim_400Regular } from '@expo-google-fonts/itim';

const PinEntryScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  let [fontsLoaded] = useFonts({ Itim_400Regular });

  const handlePinChange = (enteredPin) => {
    setPin(enteredPin);
  };
  // used to validate pin details

  const handlePinSubmit = () => {
    const userEmail = auth.currentUser.email;

    axios.get('http://localhost:3000/checkpin', {
      params: {
        email: userEmail,
        pin: pin, 
      },
    })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data.message);
        navigation.navigate('ParentUI');
      }
    })
    .catch((error) => {
      console.error('Error:', error.response?.data?.message || error.message);
      setError('Incorrect PIN. Please try again.');
    });
  };
  
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={phyDoodleShapes} style={styles.backgroundImage} />
      <Text style={styles.errorText}>{error}</Text>
      <Text style={styles.prompt}>Switching to parents mode</Text>
      <Text style={styles.promptText}>Please enter your PIN</Text>
      <TextInput
        style={styles.input}
        value={pin}
        onChangeText={handlePinChange}
        keyboardType="numeric"
        maxLength={4}
        secureTextEntry
      />
      <TouchableOpacity style={styles.submitButtonContainer} onPress={handlePinSubmit}>
        <Text style={styles.submitButtonText}>Enter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F6FF',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    marginTop: 0,
    marginBottom: -320,
  },
  errorText: {
    fontSize: 20,
    color: 'red',
    marginBottom: 20,
    bottom: 110,
  },
  prompt: {
    fontSize: 60,
    marginBottom: 20,
    fontFamily: 'Itim_400Regular',
    color: '#3F3CB4',
    bottom: 350,
  },
  
  promptText: {
    fontSize: 40,
    marginBottom: 20,
    fontFamily: 'Itim_400Regular',
    color: '#3F3CB4',
    bottom: 350,
  },
  
  input: {
    width: '80%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    bottom: 330,
  },
  submitButtonContainer: {
    bottom: 300,
    backgroundColor: '#A2C13C',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  submitButtonText: {
    color: '#000000',
    fontSize: 28,
    fontFamily: 'Itim_400Regular',
    textAlign: 'center',
  },
  goBackButton: {
    marginTop: 20,
    bottom: 300,
  },
  goBackText: {
    color: '#3F3CB4',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PinEntryScreen;
