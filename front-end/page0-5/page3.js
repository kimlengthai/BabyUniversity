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
          toValue: -50,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 500,
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
        translateY: bounceValue,
      },
    ],
  };
  
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startAnimation}>
        <Animated.View style={[styles.circle, circleStyle]} />
      </TouchableOpacity>
      <Text style={{ color: 'white', fontSize: 50 }}>
       
      </Text>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bodyText: {
    position: 'absolute',
    zIndex: 100,
    bottom: 50,
    fontWeight: '700',
    color: 'white',
    

  }
});

export default Page3;
