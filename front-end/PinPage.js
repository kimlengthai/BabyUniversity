import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { auth } from './firebase'; // Adjust the path based on your firebase setup
import ParentUI from './ParentUI/ParentUI';

const PinEntryScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handlePinChange = (enteredPin) => {
    setPin(enteredPin);
  };

  const handlePinSubmit = () => {
    const userEmail = auth.currentUser.email;

    axios.get('http://localhost:3000/checkpin', {
      params: {
        email: userEmail,
        pin: pin, // Use the state variable pin
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

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{error}</Text>
      <Text style={styles.prompt}>Enter 4-Digit PIN:</Text>
      <TextInput
        style={styles.input}
        value={pin}
        onChangeText={handlePinChange}
        keyboardType="numeric"
        maxLength={4}
      />
      <Button title="Submit" onPress={handlePinSubmit} />
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
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  prompt: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 24,
  },
  goBackButton: {
    marginTop: 20,
  },
  goBackText: {
    color: '#3F3CB4',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PinEntryScreen;
