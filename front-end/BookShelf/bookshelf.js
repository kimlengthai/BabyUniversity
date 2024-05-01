import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Button, Image } from 'react-native';

const image = <Image source={require('./bookshelfbackground.png')} />

const BookshelfScreen = () => {
  return(
    <View style={backgroundStyle.container}>
        <Image 
        source={require('../assets/bedRoomImages/background_doodle.png')} //placeholder atm no bookshelf 
        style={styles.image} 
        />
    </View>
  )
};

const backgroundStyle = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      flex: 1,
      position: 'absolute',
      justifyContent: 'center',
      resizeMode: 'contain',
      top: 0
    }
  });