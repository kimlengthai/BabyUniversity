import { StyleSheet, Text, View, Animated, Easing, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import BackButton from './BackButton';

const Page12 = () => {
  const animated1 = useRef(new Animated.Value(0)).current;
  const animated2 = useRef(new Animated.Value(0)).current;
  const animated3 = useRef(new Animated.Value(0)).current;
  const [isAnimating, setIsAnimating] = useState(false);

  const createAnimation = (animatedValue, duration) => {
    return Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]);
  };

  const startAnimations = () => {
    Animated.loop(createAnimation(animated1, 2000)).start();
    Animated.loop(createAnimation(animated2, 3000)).start();
    Animated.loop(createAnimation(animated3, 4000)).start();
  };

  const stopAnimations = () => {
    animated1.stopAnimation();
    animated2.stopAnimation();
    animated3.stopAnimation();
  };

  const handlePress = () => {
    if (isAnimating) {
      stopAnimations();
    } else {
      startAnimations();
    }
    setIsAnimating(!isAnimating);
  };

  const inputRange = [0, 1];
  const rotate1 = animated1.interpolate({ inputRange, outputRange: ['0deg', '150deg'] });
  const rotate2 = animated2.interpolate({ inputRange, outputRange: ['0deg', '140deg'] });
  const rotate3 = animated3.interpolate({ inputRange, outputRange: ['0deg', '130deg'] });

  return (
    <View style={styles.container}>
      <BackButton />
      <TouchableOpacity onPress={handlePress}>
      <View style={styles.circleContainer}>
        <Animated.View style={[styles.circle, { transform: [{ rotate: rotate1 }] }]}>
          <View style={styles.innerCircle} />
          <View style={[styles.glowing, styles.glowing1]} />
          <View style={[styles.glowing, styles.glowing2]} />
          <View style={[styles.glowing, styles.glowing3]} />
        </Animated.View>

        <Animated.View style={[styles.circle2, { transform: [{ rotate: rotate2 }] }]}>
          <View style={styles.innerCircle2} />
          <View style={[styles.secondGlowing, styles.glowing1]} />
          <View style={[styles.secondGlowing, styles.glowing2]} />
          <View style={[styles.secondGlowing, styles.glowing3]} />
        </Animated.View>

        <Animated.View style={[styles.circle3, { transform: [{ rotate: rotate3 }] }]}>
          <View style={styles.innerCircle3} />
          <View style={[styles.thirdGlowing, styles.glowing1]} />
          <View style={[styles.thirdGlowing, styles.glowing2]} />
          <View style={[styles.thirdGlowing, styles.glowing3]} />
        </Animated.View>

        <View style={styles.protonAndNeutron}>
          <View style={styles.proton} />
          <View style={styles.neutron} />
        </View>
      </View>
      </TouchableOpacity>
      

      <View style={styles.bodyText}>
        <Text style={{ color: 'black', fontSize: 70, textAlign: 'center', fontWeight: 700 }}>
          <Text style={{ color: 'yellow',textShadowColor: '#585858', textShadowOffset:{width: 1, height: 1},textShadowRadius:1 }}>Energy</Text> is quantized.
        </Text>
      </View>
    </View>
  );
};

export default Page12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#BDC2C8',
    width: '100%',
    height: 'auto'
  },
  circleContainer: {
    width: 900,
    height: 400,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  circle: {
    width: 700,
    height: 700,
    borderRadius: 350,
    borderColor: 'black',
    borderWidth: 2,
    position: 'absolute',
    bottom: -400,
    zIndex: 2,
  },
  innerCircle: {
    width: 60,
    height: 60,
    backgroundColor: 'green',
    borderRadius: 30,
    position: 'absolute',
    top: 220,
    left: -14,
    zIndex: 4,
  },
  glowing: {
    width: 70,
    height: 70,
    backgroundColor: 'yellow',
    position: 'absolute',
    top: 215,
    left: -20,
    zIndex: 2,
    shadowColor: 'rgba(252, 291, 82, 0.8)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 3,
    shadowRadius: 40,
    borderColor: 'null',
  },
  secondGlowing: {
    width: 55,
    height: 55,
    backgroundColor: 'yellow',
    position: 'absolute',
    top: 150,
    left: -10,
    zIndex: 2,
    shadowColor: 'rgba(252, 291, 82, 0.8)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 12,
    borderColor: 'null',
  },
  thirdGlowing: {
    width: 40,
    height: 40,
    backgroundColor: 'yellow',
    position: 'absolute',
    top: 95,
    left: 0,
    zIndex: 2,
    shadowColor: 'rgba(252, 291, 82, 0.8)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 12,
    borderColor: 'null',
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
  circle2: {
    width: 550,
    height: 550,
    borderRadius: 275,
    borderColor: 'black',
    borderWidth: 2,
    position: 'absolute',
    bottom: -330,
    zIndex: 4,
  },
  innerCircle2: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 25,
    position: 'absolute',
    top: 152,
    left: -8,
    zIndex: 4,
  },
  circle3: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderColor: 'black',
    borderWidth: 2,
    position: 'absolute',
    bottom: -250,
    zIndex: 4,
  },
  innerCircle3: {
    width: 30,
    height: 30,
    backgroundColor: 'green',
    borderRadius: 15,
    position: 'absolute',
    top: 100,
    left: 5,
    zIndex: 4,
  },
  protonAndNeutron: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    bottom: -320,
  },
  proton: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'red',
    position: 'absolute',
    left: -70,
    bottom: -80,
  },
  neutron: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'blue',
    position: 'absolute',
    right: -70,
    bottom: -80,
  },
  bodyText: {
    textAlign: 'center',
    position: 'absolute',
    zIndex: 100,
    bottom: 50,
    fontWeight: '700',
    color: 'white',
  },
});
