// import React from 'react';
// import { View, Text } from 'react-native';
// import SignupScreen from './SignUp/signup';
// import LoginScreen from './screens/LoginScreen';
// const App = () => {
//   return (
//     <View>
//       <Text > <SignupScreen /> {/* Render your signup screen component */} </Text>
//     </View>
//   );
// };

// export default App;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import BedRoomScreen from './Bedroom/BedRoomScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options= {{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options= {{headerShown: false}} name="Bedroom" component={BedRoomScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


