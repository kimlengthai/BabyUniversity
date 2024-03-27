import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';

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
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirm Password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
      />
      <TextInput
        placeholder="First Name"
        onChangeText={setFirstName}
        value={firstName}
      />
      <TextInput
        placeholder="Last Name"
        onChangeText={setLastName}
        value={lastName}
      />
      <TextInput
        placeholder="Date of Birth (YYYY-MM-DD)" // Adjust placeholder if needed
        onChangeText={setDOB}
        value={DOB}
      />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;