import React, { useState } from 'react';
import {ImageBackground, Button} from 'react-native';

const image = <Image source={require('./bedroombackground.png')} />

const BedroomScreen = () => {
    <View style={backgroundStyle.container}>
        <ImageBackground source={image} resizeMode="cover" style={backgroundStyle.image}>
        </ImageBackground>
  </View>
};

const backgroundStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    }
  });