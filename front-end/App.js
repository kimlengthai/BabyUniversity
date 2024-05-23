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
//import HomeScreen from './screens/HomeScreen';
import BedRoomScreen from './Bedroom/BedRoomScreen';
import PinEntryScreen from './PinPage'
import LoginScreen from './screens/LoginScreen';
import ParentUI from '../front-end/ParentUI/ParentUI';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen options= {{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options= {{headerShown: false}} name="Bedroom" component={BedRoomScreen} />
        <Stack.Screen name="PinEntry" component={PinEntryScreen} />
        <Stack.Screen name="ParentUI" component={ParentUI} />

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


