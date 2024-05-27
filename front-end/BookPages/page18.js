import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, Easing } from 'react-native';
import BackButton from './BackButton';

const page18 = () => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    /*Sets up a continuous loop of animation */
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Bottom left
  const redBallStyle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 100], // Adjust as needed
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 80], // Adjust as needed
        }),
      },
    ],
  };

  // Top right
  const redBall2Style = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -100], // Adjust as needed
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80], // Adjust as needed
        }),
      },
    ],
  };

  // Bottom right
  const blueBallStyle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 100], // Adjust as needed
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 37], // Adjust as needed
        }),
      },
    ],
  };

  // Top left
  const blueBall2Style = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -100], // Adjust as needed
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -40], // Adjust as needed
        }),
      },
    ],
  };

  // At the top
  const greenBallStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70], // Adjust as needed
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <BackButton />
      <Animated.View style = {[styles.redBall, redBallStyle]}></Animated.View>
      <Animated.View style = {[styles.blueBall, blueBallStyle]}></Animated.View>
      <Animated.View style = {[styles.greenBall, greenBallStyle]}></Animated.View>
      <Animated.View style = {[styles.redBall2, redBall2Style]}></Animated.View>
      <Animated.View style = {[styles.blueBall2, blueBall2Style]}></Animated.View>

      <View>
      <View style = {styles.skip}></View>
      <View style = {styles.line}></View>
      </View>

      <View style={styles.bodyText}>
      <Text style={styles.text}>There are no <Text style={styles.electronText}>electron</Text> with zero energy.</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f5',
    width: '100%',
    height: 'auto'
  },
  redBall: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: 'red',
    borderWidth: 2,
    right: 20,
    top: 330,
    zIndex: -3, // Bottom left
  },
  blueBall: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: 'blue',
    borderWidth: 2,
    left: 20,
    top: 250, // Bottom right
  },
  greenBall: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: 'green',
    borderWidth: 2,
    top: 80,
    left: 10,
    zIndex: 1,
  },
  redBall2: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: 'red',
    borderWidth: 2,
    top: 90,
    left: 30, // Top right
  },
  blueBall2: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: 'blue',
    borderWidth: 2,
    right: 10,
    top: 10,
    zIndex: -2, // Top left
  },
  skip: {
    width: 350,
    height: 350,
    borderRadius:'180%',
    borderWidth: 15,
    borderColor: 'red',
    zIndex: 2,
    bottom: 200,
  },
  line:
  {
    position: 'absolute',
    width: '28%',
    height: 15,
    backgroundColor: 'red',
    top: '35%',
    transform: [{ translateY: -155 }, { rotate: '145deg' }],
  },
  bodyText: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    fontWeight: '700',
    color: 'black',
  },
  text:
  {
    fontSize: 70,
    color: 'black',
    textAlign: 'center',
    fontWeight: '700'
  },
  electronText: 
  {
    color: 'green',
    fontWeight: '700'
  },
});

export default page18;
