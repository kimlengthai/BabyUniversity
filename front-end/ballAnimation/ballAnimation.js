import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Easing } from 'react-native';
import * as Font from 'expo-font';
 
const { width } = Dimensions.get("window");
const circleWidth = width / 2;
/*
const getFonts = () => Font.loadAsync({
  'Itim-Regular': require('./assets/fonts/Itim-Regular.ttf')
});*/

const UIAnimation = () => {
 
  const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
 
  useEffect(() => {
    
    Animated.sequence([
      
      Animated.timing(translation.y, { toValue: 100, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
      Animated.timing(translation.y, { toValue: 175, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
      Animated.timing(translation.x, { toValue: 150, duration: 1000, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(translation.y, { toValue: 275, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
      Animated.timing(translation.x, { toValue: 300, duration: 1000, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(translation.y, { toValue: 375, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
      Animated.timing(translation.x, { toValue: 355, duration: 1000, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(translation.y, { toValue: 445, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
      
     /*
      Animated.timing(translation, { toValue: { x: 150, y: 100 }, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
      Animated.timing(translation, { toValue: { x: 300, y: 175 }, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
      Animated.timing(translation, { toValue: { x: 450, y: 275 }, duration: 1000, easing: Easing.linear, useNativeDriver: true }),
      */
    ]).start();
   
  }, []);
 
  const move = useRef(new Animated.Value(0)).current;
 
  Animated.loop(
    Animated.sequence([
      Animated.timing(move, { toValue: 1, duration: 4000, useNativeDriver: true }),
      Animated.timing(move, { toValue: 0, duration: 4000, useNativeDriver: true }),
    ])
  ).start();
 
  const translate = move.interpolate({
    inputRange: [0, 1],
    outputRange: [0, circleWidth / 6],
  });
 
  const scale = move.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });
 
  return (
    <View style={styles.container}>
      <Text style={styles.babyUniversity}>Baby University</Text>
      <View style={styles.coveringI} />
      <Animated.View
        style={[
          styles.ball,
          {
            
            transform: [{ translateY: translation.y }, { translateX: translation.x }],
          },
        ]}
      />
      <View style={styles.shadow} />
      <View style={styles.shadow2} />
      <View style={styles.shadow3} />
      {[...Array(1)].map((_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.ballYellowTop,
            { top: -30 },
            { transform: [{ scale: scale }] },
          ]}
        />
      ))}
      <Animated.View
        style={[
          styles.ballYellowBottom,
          { transform: [{ scale: scale }] },
        ]}
      />
      <Animated.View
        style={[
          styles.ballRed,
          { transform: [{ scale: scale }] },
        ]}
      />
      <Animated.View
        style={[
          styles.ballGreenRight,
          { transform: [{ scale: scale }] },
        ]}
      />
      <Animated.View
        style={[
          styles.ballGreenBottom,
          { transform: [{ scale: scale }] },
        ]}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  babyUniversity: {
    color: 'darkblue',
    fontSize: 80,
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Itim-Regular',
    bottom: 190,
    zIndex: -3,
  },
  coveringI: {
    backgroundColor: 'lightblue',
    width: 13,
    height: 13,
    top: -298,
    left: 188,
    zIndex: -1,
    borderRadius: 50,
  },
  ball: {
    backgroundColor: '#dd3434',
    width: 30,
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    left: 235,
    top: -105,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  shadow: {
    width: 100,
    height: 20,
    backgroundColor: 'gray',
    borderRadius: 50,
    position: 'absolute',
    top: 100,
    left: 200,
    boxShadow: '0 0 10px black',
    zIndex: -1,
  },
  shadow2: {
    width: 100,
    height: 20,
    backgroundColor: 'gray',
    borderRadius: 50,
    position: 'absolute',
    top: 200,
    left: 350,
    boxShadow: '0 0 10px black',
    zIndex: -1,
  },
  shadow3: {
    width: 100,
    height: 20,
    backgroundColor: 'gray',
    borderRadius: 50,
    position: 'absolute',
    top: 300,
    left: 490,
    boxShadow: '0 0 10px black',
    zIndex: -1,
  },
  ballYellowTop: {
    backgroundColor: 'rgb(246, 255, 44)',
    borderRadius: 75,
    position: 'absolute',
    width: 150,
    height: 150,
    left: 550,
  },
  ballYellowBottom: {
    backgroundColor: 'rgb(246, 255, 44)',
    borderRadius: 75,
    position: 'absolute',
    width: 160,
    height: 160,
    right: 120,
    bottom: -80,
  },
  ballRed: {
    backgroundColor: 'rgb(251, 114, 126)',
    borderRadius: 75,
    position: 'absolute',
    width: 150,
    height: 150,
    left: -60,
    top: 100,
  },
  ballGreenRight: {
    backgroundColor: 'rgb(162, 193, 60)',
    borderRadius: 125,
    position: 'absolute',
    width: 220,
    height: 220,
    right: -80,
    top: 10,
  },
  ballGreenBottom: {
    backgroundColor: 'rgb(162, 193, 60)',
    borderRadius: 125,
    position: 'absolute',
    width: 220,
    height: 220,
    left: 50,
    bottom: -100,
  },
});
 
export default UIAnimation;
 
