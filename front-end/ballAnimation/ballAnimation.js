import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
 
const { width } = Dimensions.get("window");
const circleWidth = width / 2;
 
const UIAnimation = () => {
 
  const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
 
  useEffect(() => {
    Animated.sequence([
      Animated.spring(translation.y, { toValue: 100, useNativeDriver: true }),
      Animated.spring(translation.y, { toValue: 170, useNativeDriver: true }),
      Animated.spring(translation.x, { toValue: 150, useNativeDriver: true }),
      Animated.spring(translation.y, { toValue: 270, useNativeDriver: true }),
      Animated.spring(translation.x, { toValue: 300, useNativeDriver: true }),
      Animated.spring(translation.y, { toValue: 370, useNativeDriver: true }),
      Animated.spring(translation.x, { toValue: 413, useNativeDriver: true }),
      Animated.spring(translation.y, { toValue: 458, useNativeDriver: true }),
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
        //    { opacity: 0.2 },
            { transform: [{ scale: scale }] },
          ]}
        />
      ))}
      <Animated.View
        style={[
          styles.ballYellowBottom,
        //  { opacity: 0.2 },
          { transform: [{ scale: scale }] },
        ]}
      />
      <Animated.View
        style={[
          styles.ballRed,
        //  { opacity: 0.2 },
          { transform: [{ scale: scale }] },
        ]}
      />
      <Animated.View
        style={[
          styles.ballGreenRight,
        //  { opacity: 0.2 },
          { transform: [{ scale: scale }] },
        ]}
      />
      <Animated.View
        style={[
          styles.ballGreenBottom,
        //  { opacity: 0.2 },
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
  },
  babyUniversity: {
    color: 'darkblue',
    position: 'absolute',
    top: '45%',
    left: '35%',
    fontFamily: 'Itim',
    fontSize: 50,
  },
  ball: {
    backgroundColor: '#dd3434',
    width: 30,
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    left: 235,
    top: -100,
    zIndex: 1,
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
    left: 500,
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
 
