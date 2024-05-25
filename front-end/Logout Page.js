import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LogoutSuccessful = () => {
  const navigation = useNavigation();

  const handleLoginRedirect = () => {
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logout Successful</Text>
      <Text style={styles.message}>You have successfully logged out.</Text>
      <TouchableOpacity onPress={handleLoginRedirect} style={styles.button}>
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8EEF7', // Background color
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3F3CB4', // Custom color
  },
  message: {
    fontSize: 18,
    marginBottom: 40,
    color: '#333', // Darker text color
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#3F3CB4', // Matching button color
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LogoutSuccessful;
