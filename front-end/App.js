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
import page6 from './page6-17/Page6'
import page7 from './page6-17/Page7'
import page8 from './page6-17/Page8'
import page9 from './page6-17/Page9'
import page10 from './page6-17/Page10'
import page11 from './page6-17/Page11'
import page12 from './page6-17/Page12'
import page6v2 from './page6-17/Page6V2'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options= {{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options= {{headerShown: false}} name="Bedroom" component={BedRoomScreen} /> */}

        {/* book pages 6-17 */}

        {/* <Stack.Screen options= {{headerShown: false}} name="page6" component={page6} />  */}
        {/* <Stack.Screen options= {{headerShown: false}} name="page7" component={page7} />  */}
        {/* <Stack.Screen options= {{headerShown: false}} name="page8" component={page8} />  */}
        {/* <Stack.Screen options={{headerShown: false}} name="page9" component={page9} /> */}
        <Stack.Screen options= {{headerShown: false}} name="page10" component={page10} /> 
        {/* <Stack.Screen options= {{headerShown: false}} name="page11" component={page11} /> */}
        {/* <Stack.Screen options= {{headerShown: false}} name="page12" component={page12} /> */}

        {/* <Stack.Screen options= {{headerShown: false}} name="page6v2" component={page6v2} /> */}


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


