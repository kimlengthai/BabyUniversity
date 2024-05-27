import React, { useState } from 'react';
import SwipeBook from '../screens/SwipeBook';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Button, Image } from 'react-native';
import { auth } from '../firebase';
import MenuButton from '../MenuButton';
import LogoutSuccessful from '../Logout Page';
import { useFonts, Itim_400Regular } from '@expo-google-fonts/itim';


const BedRoomScreen = ({navigation}) => {

  let [fontsLoaded] = useFonts({ Itim_400Regular });

  const openBook = () => {
    navigation.navigate('SwipeBook');
  };

  const handleLogout= () => {
   
      navigation.navigate('Logout');
    
  };

  return(
    <View style = {styles.container}>

     {/* Background */}  
      <Image 
        source={require('../assets/bedRoomImages/background_doodle.png')} 
        style={styles.background} 
      />
      <MenuButton userMode = "parents" />
       {/* header text title */}  
      <View style = {styles.headerTextContainer}>
        <Text style = {styles.bedroomTitle}>Bedroom</Text>
      </View>
      
      {/* Clock */}  
      <Image 
        source={require('../assets/bedRoomImages/clock.png')} 
        style={styles.clock} 
      />
      {/* books */}

      <TouchableOpacity onPress={openBook} style={styles.booksContainer}>
        <Image source={require('../assets/bedRoomImages/books.png')} style={styles.books} />
      </TouchableOpacity>
   
      {/* rectangle */} 
      <View style = {styles.rectangle}></View>

       {/* canvas */}  
       <Image 
        source={require('../assets/bedRoomImages/Canvas.png')} 
        style={styles.canvas} 
      />

      {/* group 9 */}  
      <Image 
        source={require('../assets/bedRoomImages/Group9.png')} 
        style={styles.group9} 
      />

      {/* group 8 */}  
      <Image 
        source={require('../assets/bedRoomImages/Group8.png')} 
        style={styles.group8} 
      />

      {/* car */}  
      <Image 
        source={require('../assets/bedRoomImages/car.png')} 
        style={styles.car} 
      />

      {/* ball */}  
      <Image 
        source={require('../assets/bedRoomImages/basketball.png')} 
        style={styles.ball} 
      />
      {/* books capinet */}
      <Image 
        source={require('../assets/bedRoomImages/booksCapinet.png')} 
        style={styles.booksCapinet} 
      />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </View>
    
  )
};
export default BedRoomScreen;

const styles = StyleSheet.create({
  logoutButton: {
    position: 'absolute',
    top: 40,
    right: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: 'rgba(255, 0, 0, 0.8)', // Red background with some transparency
    borderRadius: 10, // Rounded corners
    elevation: 5, // Add elevation for a raised effect on Android
  },
  logoutText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff', // White text color
  },
    container: {
      flex: 1,     
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center'

    },
    background: {
      position: 'absolute',
      top: 0,
      resizeMode: 'contain',
      backgroundColor: '#D8EEF7' /*add bg colour*/
    },
    headerTextContainer: {
      position: 'absolute',
      top: '8%'
      
    },
    bedroomTitle: {
     fontSize: 50,
     fontFamily: 'Itim_400Regular',
     color: '#3F3CB4'

    },
    rectangle: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#F7D553',
      height: "28%",

    },
    booksCapinet: {
      position: 'absolute',
      right: 0,
      top: '20'

    },
    clock: {
      position: 'absolute',
      top: 70,
      left: 70
    },
    books: {
      position: 'absolute',
      top: '25%'
    },
    canvas: {
      position: 'absolute',
      left: '2%',
      top: '38%'
    },
    group9: {
      position: 'absolute',
      top: '80%',
      left: '25%'
    },
    group8: {
      position: 'absolute',
      top: '90%',
      left: '50%'
    },
    car: {
      position: 'absolute',
      top: '75%',
      left: '40%'
    },
    ball: {
      position: 'absolute',
      right: '20%',
      top: '70%'
    },

    booksContainer:
    {
      position: 'absolute',
      top: '26%',
      right: '72%'
    }
   
  });