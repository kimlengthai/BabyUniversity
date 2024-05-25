import React, { useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Dimensions, ScrollView } from 'react-native';
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

  const signUpTitleFontSize = Math.min(28, screenWidth * 0.05);

  const handleSignup = async () => {
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

    if (!validateLastName(lastName)) {
      setError('Last name must contain only alphabets.');
      return;
    }

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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="oneTimeCode" // Change to oneTimeCode to disable suggestion
              passwordRules="" // Add empty password rules
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
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="oneTimeCode" // Change to oneTimeCode to disable suggestion
              passwordRules="" // Add empty password rules
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  signUpTitle: {
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3F3CB4',
  },
  inputContainer: {
    width: '90%',
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
    flex: 1,
  },
  input: {
    flex: 2,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: '60%',
  },
  button: {
    backgroundColor: '#3F3CB4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default SignupScreen;
