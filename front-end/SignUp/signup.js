import React, { useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import phyDoodleShapes from '../assets/BgImage/doodle.png';

// Setting and defining variables and methods for validations
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateName = (name) => /^[A-Za-z]+$/.test(name);
const validateDOB = (dob) => {
  const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!datePattern.test(dob)) return { valid: false, message: 'Please enter date in DD/MM/YYYY format.' };
  const [day, month, year] = dob.split('/').map(Number);
  const date = new Date(year, month - 1, day);
  if (date.getDate() !== day || date.getMonth() !== month - 1 || date.getFullYear() !== year) return { valid: false, message: 'Incorrect date entered. Please enter a different date' };
  return { valid: true };
};
const validateParentalPin = (pin) => /^\d{4}$/.test(pin);
const validatePassword = (password, confirmPassword) => {
  const errors = [];

  if (password.length < 6) {
    errors.push('Password must contain atleast 6 characters. Please try again');
  }

  const capitalRegex = /[A-Z]/;
  if (!capitalRegex.test(password)) {
    errors.push('Password should have atleast one or more uppercase letter. Please try again');
  }

  const specialRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (!specialRegex.test(password)) {
    errors.push('Password should have atleast one or more lowercase letter. Please try again');
  }

  const numberRegex = /[0-9]/;
  if (!numberRegex.test(password)) {
    errors.push('Password should have atleast one number.Please try again');
  }

  if (password !== confirmPassword) {
    errors.push('Password and Confirm password do not match. Please try again');
  }

  return errors;
}
// used to define all vraiables used
const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [DOB, setDOB] = useState('');
  const [parentalPin, setParentalPin] = useState('');
  const [errors, setErrors] = useState({});

  const navigation = useNavigation();
  
// Ensures all details are validated prior to saving to the database
const handleSignup = async () => {
  const newErrors = {};

  if (!email) newErrors.email = 'Please enter your email.';
  else if (!validateEmail(email)) newErrors.email = 'Invalid email format.';

  if (!firstName) newErrors.firstName = 'Please enter your first name.';
  else if (!validateName(firstName)) newErrors.firstName = 'First name must only contain letters.';

  if (!lastName) newErrors.lastName = 'Please enter your last name.';
  else if (!validateName(lastName)) newErrors.lastName = 'Last name must only contain letters.';

  if (!DOB) newErrors.DOB = 'Please enter your date of birth.';
  else {
    const dobValidation = validateDOB(DOB);
    if (!dobValidation.valid) newErrors.DOB = dobValidation.message;
  }

  if (!parentalPin) newErrors.parentalPin = 'Please enter a four-digit pin.';
  else if (!validateParentalPin(parentalPin)) newErrors.parentalPin = 'Please enter a valid four-digit pin.';
  if(!password) newErrors.password = ' Please enter a password'

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      const requestUrl = 'http://localhost:3000/save';
      const requestBody = { email, firstName, lastName, DOB, parentalPin };

      const response = await axios.post(requestUrl, requestBody);
      console.log(response.data.message); 
      navigation.replace('Bedroom'); 
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrors({ email: 'The email address is already in use by another account.' });
      } else {
        setErrors({ general: 'Signup failed: ' + error.message });
      }
    }
  }
};

return (
    
  <ScrollView contentContainerStyle={styles.scrollContainer}>
     <Image source={phyDoodleShapes} style={styles.backgroundImage} />
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
    <Text style={styles.header}>Baby University Sign up page</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="oneTimeCode" 
            passwordRules=""
            value={password}
            onChangeText={text => setPassword(text)}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Confirm Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="oneTimeCode"
            passwordRules=""
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
          {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your first name"
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
          {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your last name"
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
          {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>DOB:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your date of birth"
            value={DOB}
            onChangeText={text => setDOB(text)}
          />
          {errors.DOB && <Text style={styles.errorText}>{errors.DOB}</Text>}
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Parental Pin:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter a four digit pin"
            secureTextEntry
            value={parentalPin}
            onChangeText={text => setParentalPin(text)}
          />
          {errors.parentalPin && <Text style={styles.errorText}>{errors.parentalPin}</Text>}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignup} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {errors.general && <Text style={styles.errorText}>{errors.general}</Text>}
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.navigate('Login')}>
<Text style={styles.goBackText}>Go Back</Text>
</TouchableOpacity>

    </KeyboardAvoidingView>
  </ScrollView>
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
  header: {
    fontSize: 50,
    fontFamily: 'Itim_400Regular',
    color: '#3F3CB4',
    marginVertical: 20,
  },
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
    marginTop: 5,
    marginLeft: 10,
    fontSize: 12,
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
export default SignupScreen;