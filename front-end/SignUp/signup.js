import React, { useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import validation functions
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateName = (firstName) => /^[A-Za-z]+$/.test(firstName);
const validateLastName = (lastName) => /^[A-Za-z]+$/.test(lastName);
const validateDOB = (DOB) => /^\d{2}\/\d{2}\/\d{4}$/.test(DOB);
const validateParentalPin = (parentalPin) => /^\d{4}$/.test(parentalPin);

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [DOB, setDOB] = useState('');
  const [parentalPin, setParentalPin] = useState('');
  const [error, setError] = useState(null);

  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  // Calculate the font size based on the screenWidth
  const signUpTitleFontSize = Math.min(24, screenWidth * 0.06); // Adjust the factor (0.06) as needed

  const handleSignup = async () => {
    // Perform validations
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }
    if (!validateName(firstName) || !validateName(lastName)) {
      setError('First name and last name must only contain letters');
      return;
    }
    if (!validateDOB(DOB)) {
      setError('Invalid date of birth format. Must be in DD/MM/YYYY format');
      return;
    }
    if (!validateParentalPin(parentalPin)) {
      setError('Please enter a four digit number only');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Save the user's details to the Firebase database
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      const requestUrl = 'http://localhost:3000/save';
      const requestBody = {
        email,
        firstName,
        lastName,
        DOB,
        parentalPin
      };
      
      // Send the user details to the backend API using Axios
      const response = await axios.post(requestUrl, requestBody);
      console.log(response.data.message); 
      navigation.replace('Bedroom'); 
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('The email address is already in use by another account.');
      } else {
        setError('Signup failed: ' + error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={[styles.signUpTitle, { fontSize: signUpTitleFontSize }]}>Baby University</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>First Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
              value={firstName}
              onChangeText={text => setFirstName(text)}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Last Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              value={lastName}
              onChangeText={text => setLastName(text)}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>DOB:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your date of birth"
              value={DOB}
              onChangeText={text => setDOB(text)}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Parental Pin:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter a four digit pin"
              value={parentalPin}
              onChangeText={text => setParentalPin(text)}
            />
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSignup} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    color: '#3F3CB4'
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between', 
  },
  label: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#D8EEF7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8EEF7',
    width: '100%',
    height: '100%',
  },
});

export default SignupScreen;
