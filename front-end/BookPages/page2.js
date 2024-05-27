import { StyleSheet, Text, View, Animated, Easing, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BackButton from './BackButton';

const Page2 = () => {
  const [animated1] = useState(new Animated.Value(0));

  const animateFirstCircle = () => {
    console.log("animating first circle");
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated1, {
          toValue: 1,
          duration: 1000, // Adjust the duration to control the speed of the bounce
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(animated1, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ])
    ).start();
  };

  const scale = animated1.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5], // Adjust the range to control the scaling effect
  });

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.circleContainer}>
        <Animated.View style={[styles.circle, { transform: [{ scale }] }]}>
          <TouchableOpacity onPress={animateFirstCircle}>
            <View style={styles.innerCircle}></View>
            <View style={[styles.glowing, styles.glowing1]}></View>
            <View style={[styles.glowing, styles.glowing2]}></View>
            <View style={[styles.glowing, styles.glowing3]}></View>
          </TouchableOpacity>
        </Animated.View>
      </View>
      <View style={styles.bodyText}>
        <Text style={{ color: 'black', fontSize: 70 }}> 
          <Text>This ball</Text> has <Text style={{ color: 'yellow', textShadowColor: '#585858', textShadowOffset:{width: 1, height: 1},textShadowRadius:1}}>energy.</Text>
        </Text>
        
        
      </View>
    </View>
  );
}

export default Page2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#f3f4f5',
    width : '100%',
    height: 'auto'
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    left: -50,
    top: -90,
    zIndex: 4,
  },
  glowing: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
    position: 'absolute',
    zIndex: 2,
    shadowColor: 'rgba(252, 291, 82, 0.8)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 20,
    left: -50,
    top: -90,
   
  },
  glowing1: {
    transform: [{ rotate: '30deg' }],
  },
  glowing2: {
    transform: [{ rotate: '60deg' }],
  },
  glowing3: {
    transform: [{ rotate: '90deg' }],
  },
  bodyText: {
    position: 'absolute',
    zIndex: 100,
    bottom: 100,
    fontWeight: '700',
    color: 'white',
    bottom: 160
  },
});
