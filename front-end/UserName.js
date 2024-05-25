import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from './firebase'; // Adjust the path based on your firebase setup

const UsernameDisplay = () => {
  const navigation = useNavigation();
  const userEmail = auth.currentUser ? auth.currentUser.email : 'User';

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        navigation.replace('Login'); // Navigate to the login screen after logout
      })
      .catch((error) => {
        console.error("Logout failed: ", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Hello, {userEmail}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
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
    backgroundColor: '#D8EEF7', // Light blue background
    padding: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3F3CB4', // Custom color
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3F3CB4', // Matching button color
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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

export default UsernameDisplay;
