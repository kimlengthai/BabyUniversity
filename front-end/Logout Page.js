import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import phyDoodleShapes from './assets/BgImage/doodle.png';



const LogoutSuccessful = () => {
  const navigation = useNavigation();

  const handleLoginRedirect = () => {
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
       <Image source={phyDoodleShapes} style={styles.backgroundImage} />
      <Text style={styles.prompt}>Logout Successful</Text>
      <Text style={styles.message}>You have successfully logged out. Please click the button below to return to login page</Text>
      <TouchableOpacity onPress={handleLoginRedirect} style={styles.button}>
        <Text style={styles.buttonText}>Go to Login</Text>
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
    fontSize: 50,
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
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3F3CB4',
  },
  message: {
    fontSize: 18,
    marginBottom: 40,
    color: '#333', 
    textAlign: 'center',
    paddingHorizontal: 20,
    bottom: 100
  },
  button: {
    backgroundColor: '#3F3CB4',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    bottom: 110
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default LogoutSuccessful;
