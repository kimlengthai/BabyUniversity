import React, { useState } from 'react';

import SwipeBook from '../screens/SwipeBook';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Button, Image } from 'react-native';
import { auth } from '../firebase';

const BedRoomScreen = ({navigation}) => {
  const openBook = () => {
    navigation.navigate('SwipeBook');
  };

  return(
    <View style = {styles.container}>
     {/* Background */}  
      <Image 
        source={require('../assets/bedRoomImages/background_doodle.png')} 
        style={styles.background} 
      />
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


  if (showPage18) {
    return <Page18 goToPage18={() => setShowPage18(false)} />;
  }

  return (
    <View style={styles.container}>
      <Image source={backgroundDoodle} style={styles.background} />
      <MenuButton userMode="parents" />

      <View style={styles.headerTextContainer}>
        <Text style={styles.bedroomTitle}>Bedroom</Text>
      </View>

      <Image source={clock} style={styles.clock} />
      <TouchableOpacity onPress={goToPage18} style={styles.booksContainer}>
        <Image source={books} style={styles.books} />
      </TouchableOpacity>
      <View style={styles.rectangle}></View>
      <Image source={canvas} style={styles.canvas} />
      <Image source={group9} style={styles.group9} />
      <Image source={group8} style={styles.group8} />
      <Image source={car} style={styles.car} />
      <Image source={basketball} style={styles.ball} />
      <Image source={booksCapinet} style={styles.booksCapinet} />
    </View>
  );
};

export default BedRoomScreen;

const styles = StyleSheet.create({

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
     fontSize: 45,
     fontWeight: '700'

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

