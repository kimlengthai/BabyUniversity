import React, { useEffect,useState } from 'react';
import { Text,View, TextInput, Button, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import UIBallAnimation from '../ballAnimation/ballAnimation'

const LoginScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

   const navigation = useNavigation()

   useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user =>{
        if(user){
            navigation.replace("Home")
        }
    })
    return unsubscribe
   }, [])

  const handleSignup = () => {
    // Handle login logic here
    // console.log('Logging in with:', { username, password });
    auth
        .createUserWithEmailAndPassword(username, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
  }
  const handleLogin = () => {
    // Handle login logic here
    // console.log('Logging in with:', { username, password });
    auth
        .signInWithEmailAndPassword(username, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("logged in with user", user.email);
        })
        .catch(error => alert(error.message))
  }
  return (
    <KeyboardAvoidingView 
    style = {styles.container}
    behavior='padding'
    >
        <View style = {styles.ballAnimationContainer}><UIBallAnimation /></View>
        <View style={styles.coveringI} />
        <Text style = {styles.loginTitle}>Baby University</Text>
        <View style = {styles.inputContainer}>
            
            <View style={styles.inputRow}>
                <Text style={styles.label}>Username:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    value={username}
                    onChangeText = {text =>setUsername(text)}
                    // onChangeText={setUsername}
                />
            </View>
            <View style={styles.inputRow}>
                <Text style={styles.label}>Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    secureTextEntry
                    value={password}
                    // onChangeText={setPassword}
                    onChangeText = {text =>setPassword(text)}

                />
            </View>
            
            
      </View>
      <View style = {styles.buttonContainer}>
         <TouchableOpacity
        onPress={handleLogin}
        style= {styles.button}
        >
            <Text style= {styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={handleSignup}
        style= {styles.button}
        >
            <Text style= {styles.buttonText}>Create Account</Text>
        </TouchableOpacity> 
        
        
      </View>
    </KeyboardAvoidingView>

    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 


  },
  ballAnimationContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  coveringI: {
    width: 9,
    height: 9,
    backgroundColor: 'lightblue',
    top: 29,
    left: 189,
    zIndex: 2,
    borderRadius: 50,
  },
  loginTitle: {
    fontFamily: 'Itim-Regular',
    fontSize: 80,
    marginBottom: 30,
    textAlign: 'center',
    color: 'darkblue',
    zIndex: -1,
  },
  inputContainer: {
    width: '50%'
  },
  inputRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  label: {
    marginRight: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    
    borderRadius: 15,
    color: 'black',
    fontSize: 18,
    backgroundColor: 'white'
    

  },
  buttonContainer:{ 
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  button: {
    // width: '100%',
    backgroundColor: 'blue',
    paddingVertical : 15,
    paddingHorizontal: 50,   
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,


  },
    buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
   

  },


  

  

  
});

export default LoginScreen;
