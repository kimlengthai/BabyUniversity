import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import PinEntryScreen from './PinPage'
import LoginScreen from './screens/LoginScreen';
import ParentUI from '../front-end/ParentUI/ParentUI';

import BedRoomScreen from './Bedroom/BedRoomScreen';
import SignUp from './SignUp/signup';


import SwipeBook from './screens/SwipeBook';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>


        <Stack.Screen options= {{headerShown: false}} name="Bedroom" component={BedRoomScreen} />
        <Stack.Screen options={{headerShown: false}} name="PinEntry" component={PinEntryScreen} />
        <Stack.Screen options={{headerShown: false}} name="ParentUI" component={ParentUI} />


        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name='SignUp' component={SignUp} />
        {/* Book pages */}
        <Stack.Screen options= {{headerShown: false}} name="SwipeBook" component={SwipeBook} />

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