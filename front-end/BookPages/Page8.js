import React, { useState, useEffect } from 'react';
import { View, Animated, StyleSheet, Easing, Text } from 'react-native';
import BackButton from './BackButton';

import CircleAnimation from './components/CircleAnimation';

export default function Page8() {
  return (
    <View style = {styles.container}>
      <BackButton />
      <CircleAnimation  />

      {/* text */}
      <View style = {styles.text}>
        <Text style = {{color: 'white', fontSize: 50}}>And <Text style ={{color: 'green'}}>electrons.</Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: 'black',
        width: '100%',
        height: 'auto'
    },
    text:{
        position: 'absolute',
        zIndex: 100,
        bottom: 50,
        fontWeight: '700',
      
      }
})