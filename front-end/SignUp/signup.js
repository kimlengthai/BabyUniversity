
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ImageBackground, Dimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import { validateEmail, validateFirstName, validateLastName, validateDOB, validateParentalPin, validatePassword } from '../validation';
//import SignupImage from '../assets/signupimage.png';
import axios from 'axios';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [DOB, setDOB] = useState('');
  const [parentalPin, setParentalPin] = useState('');
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [DOBError, setDOBError] = useState(null);
  const [parentalPinError, setParentalPinError] = useState(null);

  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  const signUpTitleFontSize = Math.min(24, screenWidth * 0.06);

  const handleSignup = async () => {
    setEmailError(null);
    setPasswordError(null);
    setConfirmPasswordError(null);
    setFirstNameError(null);
    setLastNameError(null);
    setDOBError(null);
    setParentalPinError(null);
    setError(null);
    /*
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      setTimeout(() => setEmailError(null), 5000); // Clear error message after 5 seconds
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      setTimeout(() => setEmailError(null), 5000);
      return;
    }

    const passwordErrors = validatePassword(password, confirmPassword);
    if (passwordErrors.length > 0) {
      setPasswordError(passwordErrors[0]);
      setTimeout(() => setPasswordError(null), 5000);
      return;
    }

    if (!validateFirstName(firstName)) {
      setFirstNameError('First name must contain only alphabets.');
      setTimeout(() => setFirstNameError(null), 5000);
      return;
    }
    
    if (!validateLastName(lastName)) {
      setLastNameError('Last name must contain only alphabets.');
      setTimeout(() => setLastNameError(null), 5000);
      return;
    }


    if (!validateDOB(DOB)) {
      setDOBError('Invalid date of birth format. Use DD/MM/YYYY.');
      setTimeout(() => setDOBError(null), 5000);
      return;
    }

    if (!validateParentalPin(parentalPin)) {
      setParentalPinError('Parental pin must be a 4-digit number.');
      setTimeout(() => setParentalPinError(null), 5000);
      return;
    }
*/
    // Save the user's details to the Firebase database
    try {
      const requestUrl = 'http://localhost:3000/save';
      const requestBody = {
        email,
        password,
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
              {emailError && <Text style={styles.errorText}>{emailError}</Text>}
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
              {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
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
              {firstNameError && <Text style={styles.errorText}>{firstNameError}</Text>}
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
            {lastNameError && <Text style={styles.errorText}>{lastNameError}</Text>}
            <View style={styles.inputRow}>
          <Text style={styles.label}>DOB:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your date of birth"
            value={DOB}
            onChangeText={text => setDOB(text)}
          />
          {DOBError && <Text style={styles.errorText}>{DOBError}</Text>}
        </View>
            <View style={styles.inputRow}>
              <Text style={styles.label}>Parental Pin:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter a four digit pin"
                value={parentalPin}
                onChangeText={text => setParentalPin(text)}
              />
              {parentalPinError && <Text style={styles.errorText}>{parentalPinError}</Text>}
            </View>
          </View>


          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSignup} style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

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
