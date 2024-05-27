import React, { useState } from 'react';
import { View, StyleSheet, Animated, Easing, TouchableOpacity, Text } from 'react-native';
import BackButton from './BackButton';
const Page3 = () => {
  const [bounceValue] = useState(new Animated.Value(0));
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);

    const createBounceAnimation = (toValue) => {
      return Animated.sequence([
        Animated.timing(bounceValue, {
          toValue,
          duration: 300, // Duration of falling
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: toValue - 0.2,
          duration: 100, // Quick bounce back up
          easing: Easing.out(Easing.bounce),
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue,
          duration: 100, // Quick return down after bounce
          easing: Easing.in(Easing.bounce),
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 300, // Duration of returning to original position
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ]);
    };

    const bounceSequence = Animated.sequence([
      createBounceAnimation(1),
      createBounceAnimation(2),
      createBounceAnimation(3),
      createBounceAnimation(4),
      createBounceAnimation(5),
      createBounceAnimation(6)
    ]);

    bounceSequence.start(() => {
      Animated.timing(bounceValue, {
        toValue: 0,
        duration: 300, // Duration of returning to original position after all bounces
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        setIsAnimating(false);
      });
    });
  };

  const stopAnimation = () => {
    setIsAnimating(false);
    bounceValue.stopAnimation();
  };

  const translateY = bounceValue.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6],
    outputRange: [0, 30, 60, 90, 120, 150, 180], // Downward movement for 6 steps
  });

  const translateX = bounceValue.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6],
    outputRange: [0, 20, 40, 60, 80, 100, 120], // Rightward movement for 6 steps
  });

  const ballStyle = {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
    position: 'absolute',
    top: -120,
    left: -30,
    transform: [
      { translateY },
      { translateX },
    ],
    shadowColor: 'blue', // Shadow color set to red
    shadowOffset: { width: 0, height: 5 }, // Position shadow directly below the ball
    shadowOpacity: 3.8,
    shadowRadius: 20,
  };

  return (
    <View style={styles.container}>
      <BackButton />
      <TouchableOpacity onPress={isAnimating ? stopAnimation : startAnimation}>
        <Animated.View style={ballStyle} />
      </TouchableOpacity>
      <Text style={styles.text}>This is a ball.</Text>
    </View>
  );
}

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
  text: {
    position: 'absolute',
    bottom: 160, // Adjust as needed to position the text at the bottom
    color: 'white',
    fontSize: 70,
    textAlign: 'center',
    fontWeight: '700',
    width: '100%',
    color: 'black'

  },
});

export default Page3;
