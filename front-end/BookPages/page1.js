import React, { useState } from 'react';
import { View, StyleSheet, Animated, Easing, TouchableOpacity, Text } from 'react-native';
import BackButton from './BackButton';
const page1 = () => {
  const [bounceValue] = useState(new Animated.Value(0));
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    let bounceCount = 0;

    const bounce = () => {
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start(() => {
        bounceCount++;
        if (bounceCount < 6) {
          bounce();
        } else {
          setIsAnimating(false);
          bounceValue.stopAnimation();
        }
      });
    };

    bounce();
  };

  const stopAnimation = () => {
    setIsAnimating(false);
    bounceValue.stopAnimation();
  };

  const ballStyle = {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    position: 'absolute',
    top: -120,
    left: -30,
    transform: [
      {
        translateY: bounceValue.interpolate({
          inputRange: [0, 0.5],
          outputRange: [-70, 0],
        }),
      },
    ],
    shadowColor: 'red', // Shadow color set to blue
    shadowOffset: { width: 0, height: 5 }, // Position shadow directly below the ball
    shadowOpacity: 0.8,
    shadowRadius: 15,
  };

  return (
    <View style={styles.container}>
      <BackButton />
      <TouchableOpacity onPress={isAnimating ? stopAnimation : startAnimation}>
        <Animated.View style={ballStyle} />
        <View style={styles.shadow} />
      </TouchableOpacity>
      <Text style={styles.text}>This is a ball.</Text>
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
    width : '100%',
    height: 'auto'
  },
  shadow: {
    width: 100,
    height: 20,
    backgroundColor: 'gray',
    borderRadius: 50,
    position: 'absolute',
    top: 0,
    left: -55,
    boxShadow: '0 0 10px black',
    zIndex: -1,
  },
  text: {
    position: 'absolute',
    bottom: 100,
    color: 'black',
    fontSize: 50,
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
  },
});

export default page1;
