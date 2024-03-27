import React, { useState } from 'react';
import { Button, TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [DOB, setDOB] = useState(''); // Assuming DOB is a date string
  const [error, setError] = useState(null);

  const handleSignup = async () => {
    setError(null); // Clear any previous error

    // Client-side validation (example)
    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email format.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Construct the backend request (replace with your actual API endpoint)
    const requestUrl = 'http://localhost:3000/save'; // Replace with your API endpoint
    const requestBody = {
      email,
      password,
      firstName,
      lastName,
      DOB, // Assuming DOB is a date string
    };

    try {
      //const result = await AuthSession.startAsync({ url: requestUrl, method: 'POST', body: JSON.stringify(requestBody) });
      if (result.type === 'success') {
        // Handle successful signup (e.g., navigate to home screen)
        console.log('Signup successful!');
      } else {
        setError('Signup failed: ' + result.params.error);
      }
    } catch (error) {
      setError('An error occurred: ' + error.message);
    }
  };

  return (
    
      <View style={styles.Container}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 30,
          }}
        >
          Baby University
        </Text>
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          value={email}

          style={styles.TextInput}
          placeholderTextColor={placeholderTextColor}
        />
        
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry

          style={styles.TextInput}
          placeholderTextColor={placeholderTextColor}
        />
        <TextInput
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry

          style={styles.TextInput}
          placeholderTextColor={placeholderTextColor}
        />
        <TextInput
          placeholder="First Name"
          onChangeText={setFirstName}
          value={firstName}

          style={styles.TextInput}
          placeholderTextColor={placeholderTextColor}
        />
        <TextInput
          placeholder="Last Name"
          onChangeText={setLastName}
          value={lastName}

          style={styles.TextInput}
          placeholderTextColor={placeholderTextColor}
        />
        <TextInput
          placeholder="Date of Birth (YYYY-MM-DD)" // Adjust placeholder if needed
          onChangeText={setDOB}
          value={DOB}

          style={styles.TextInput}
          placeholderTextColor={placeholderTextColor}
        />

        {error && <Text style={{ color: 'red' }}>{error}</Text>}

        <TouchableOpacity style={styles.Button} onPress={handleSignup}>
          <Text>Sign Up</Text>
        </TouchableOpacity>

      </View>
      
      
  );
};

const placeholderTextColor = 'white';

const styles = StyleSheet.create({
  TextInput: {
    paddingVertical: 3,
    borderRadius: 5, 
    marginTop: 5,
    color: 'green',
    backgroundColor: 'gray',
    width: 200,
    textAlign: 'center',
  },
  Button: {
    backgroundColor: 'white',
    color: 'white',
    borderRadius: 10, 
    paddingVertical: 10, 
    paddingHorizontal: 35,
    marginTop: 15,
    },
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add8e6',
    minWidth: '100%',
  }
});

export default SignupScreen;