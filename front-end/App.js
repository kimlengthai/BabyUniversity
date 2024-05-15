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

import page0 from './page0-5/page0';

import page1 from './page0-5/page1';
import page2 from './page0-5/page2';
import page3 from './page0-5/page3';
import page4 from './page0-5/page4';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options= {{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options= {{headerShown: false}} name="Bedroom" component={BedRoomScreen} /> */}

        {/* book pages 6-17 */}

        {/* { <Stack.Screen options= {{headerShown: false}} name="page0" component={page0} /> } */}
        <Stack.Screen options= {{headerShown: false}} name="page1" component={page1} />
        
      



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