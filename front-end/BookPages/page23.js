import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import BackButton from './BackButton';

const Page23 = () => {
  // Animated values for arrow animation
  const [animation] = useState(new Animated.Value(0));

  // Start arrow animations
  useEffect(() => {
    const loopAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        
      ])
    );
    loopAnimation.start();
  }, []);

  // Interpolate animated values for arrow position
  const arrowPosition = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-585, 700], // Start from left (-250px) to right (300px)
  });

  return (
    <View style={styles.container}>
      <BackButton />
      {/* Arrows */}
      <Animated.View style={[styles.arrow, { transform: [{ translateX: arrowPosition }] }]} />
      <Animated.View style={[styles.triangle, { transform: [{ translateX: arrowPosition }, { rotate: '90deg' }] }]} />

      <Animated.View style={[styles.arrow2, { transform: [{ translateX: arrowPosition }] }]} />
      <Animated.View style={[styles.triangle2, { transform: [{ translateX: arrowPosition }, { rotate: '90deg' }] }]} />

      <View style={styles.bodyText}>
        <Text style={styles.text}>This amount of <Text style={styles.energy}>energy</Text> is a quantum.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BDC2C8',
    position: 'relative',
    width: '100%',
    height: 'auto'
  },
  arrow: {
    width: 150,
    height: 20,
    backgroundColor: 'yellow',
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -10 }, { rotate: '45deg' }], // Adjust arrow position
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    top: 32,
    left: 80,
    borderLeftWidth: 27,
    borderRightWidth: 27,
    borderBottomWidth: 43,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: "yellow",
    borderWidth: 0,
    borderColor: "black",
  },
  arrow2: {
    width: 150,
    height: 20,
    backgroundColor: 'yellow',
    position: 'absolute',
    top: '42%',
    transform: [{ translateY: -10 }, { rotate: '45deg' }], // Adjust arrow position
  },
  triangle2: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    top: -78,
    left: 80,
    borderLeftWidth: 27,
    borderRightWidth: 27,
    borderBottomWidth: 43,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: "yellow",
    borderWidth: 0,
    borderColor: "black",
  },
  bodyText: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 160,
    fontWeight: '700',
    zIndex: 200,
  },
  text: {
    fontSize: 70,
    color: 'black',
    textAlign: 'center',
    fontWeight: '700'

  },
  energy: {
    color: 'yellow',
    textShadowColor: '#585858', 
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:1
  },
});

export default Page23;
