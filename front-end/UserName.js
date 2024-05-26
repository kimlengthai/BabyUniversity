import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from './firebase'; 
import phyDoodleShapes from '../front-end/assets/BgImage/doodle.png';
const UsernameDisplay = () => {
  const navigation = useNavigation();
  const userEmail = auth.currentUser ? auth.currentUser.email : 'User';

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => {
        console.error("Logout failed: ", error);
      });
  };

  return (
    
    <View style={styles.container}>
      <Image source={phyDoodleShapes} style={styles.backgroundImage} />
      <Text style={styles.prompt}>Hello, {userEmail}</Text>
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
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    marginTop: 0,
    marginBottom: -320,
  },
  prompt: {
    fontSize: 40,
    marginBottom: 20,
    fontFamily: 'Itim_400Regular',
    color: '#3F3CB4',
    bottom: 350,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8EEF7',
    padding: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3F3CB4', 
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3F3CB4', 
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
