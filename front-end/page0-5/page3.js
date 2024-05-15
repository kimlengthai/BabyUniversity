import React, { useState } from 'react';
import { View, StyleSheet, Animated, Easing, TouchableOpacity, Text } from 'react-native';

const Page3 = () => {
  const [bounceValue] = useState(new Animated.Value(0));
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    let bounceCount = 0;
  
    const bounce = () => {
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: 0.25,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0.5,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0.75,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 1,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0.75,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0.5,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0.25,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start(() => {
        bounceCount++;
        if (bounceCount < 6) {
          bounce();
        } else {
          setIsAnimating(false);
          bounceValue.setValue(0); // Reset the animation value
        }
      });
    };
  
    bounce();
  };
  
  const ballStyle = {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
    transform: [
      {
        translateY: bounceValue.interpolate({
          inputRange: [0, 0.25, 0.5, 0.75, 1],
          outputRange: [0, -25, 0, -50, 0], // Adjusted outputRange for vertical movement
        }),
      },
      {
        translateX: bounceValue.interpolate({
          inputRange: [0, 0.25, 0.5, 0.75, 1],
          outputRange: [0, -25, -50, -25, 0], // Adjusted outputRange for sideways movement
        }),
      },
    ],
  };
  
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={isAnimating ? null : startAnimation}>
        <Animated.View style={ballStyle} />
      </TouchableOpacity>
      <Text style={{ color: 'black', fontSize: 50 }}>This is a ball</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Page3;
