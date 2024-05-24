import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ParentUI from '../ParentUI/ParentUI';
import picture from '../picture.png';
import BackButton from './BackButton';

const Page24 = () => {


  return (
    <View style={styles.container}>
      <BackButton />
      <Image source={picture} style={styles.pictureImg} />
      <View style={styles.bodyText}>
        <Text style={styles.text}>Now you are a quantum physicist.</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f5',
    position: 'relative',
    width: '100%',
    height: 'auto'
  },
  pictureImg: {
    left: 0,
    bottom: 0,
    width: 270,
    height: 250,
    backgroundColor: 'transparent',
  },
  bodyText: {
    textAlign: 'center',
    position: 'relative',
    bottom: -100,
    fontWeight: '700',
  },
  text: {
    fontSize: 70,
    color: 'black',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#A2C13C',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    bottom: -200,
    right: -270,
  },
  buttonText: {
    color: '#000000',
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },
});

export default Page24;
