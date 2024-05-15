import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

const Page23 = () => {
  // Animated values for arrows animation
  const [animation] = useState(new Animated.Value(0));

  // Start arrow animations
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
      ])
    ).start();
  }, []);

  // Interpolate animated values for arrow positions
  const arrowPosition = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 400], // Start from left (-100px) to right (400px)
  });

  return (
    <View style={styles.container}>
      {/* Arrows */}
      <Animated.View style={[styles.arrow, { transform: [{ translateX: arrowPosition }] }]} />
      <Animated.View style={[styles.arrow, { transform: [{ translateX: arrowPosition }] }]} />

      {/* Text */}
      <Text style={styles.text}>This amount of <Text style={styles.energy}>energy</Text> is a quantum.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    position: 'relative',
  },
  text: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    top: 150,
  },
  energy: {
    color: 'yellow',
  },
  arrow: {
    width: 100,
    height: 20,
    backgroundColor: 'yellow',
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -10 }, { rotate: '45deg' }], // Adjust arrow position
  },
});

export default Page23;
