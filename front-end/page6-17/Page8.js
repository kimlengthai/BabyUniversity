import React, { useState, useEffect } from 'react';
import { View, Animated, StyleSheet, Easing, Text } from 'react-native';


import CircleAnimation from './components/CircleAnimation';
export default function Page8() {
  return (
    <View style = {styles.container}>
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
    },
    text:{
        position: 'absolute',
        zIndex: 100,
        bottom: 50,
        fontWeight: '700',
      
      }
})