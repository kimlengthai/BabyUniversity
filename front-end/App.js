import React from 'react';
import { View, Text } from 'react-native';
import SignUpScreen from './SignUp/signup'; // Import your signup screen component

const App = () => {
  return (
    <View>
      <Text>Welcome to Baby University</Text>
      <SignUpScreen /> {/* Render your signup screen component */}
    </View>
  );
};

export default App;