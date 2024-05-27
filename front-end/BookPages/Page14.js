import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import React, { useState } from 'react';
import BackButton from './BackButton';

const Page14 = () => {
  const [electronScale] = useState(() => {
    const scale = new Animated.Value(1);
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.1,  // Reduced scaling range
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
    return scale;
  });

  const [glowOpacity] = useState(() => {
    const opacity = new Animated.Value(0.6); // Increased starting opacity
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,  // Increased opacity range
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.6,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
    return opacity;
  });

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.circleContainer}>
        <View style={styles.circle}></View>

        <View style={styles.circle2}>
          <Animated.View
            style={[styles.innerCircle2, { transform: [{ scale: electronScale }] }]}
          />
          <Animated.View
            style={[styles.secondGlowing, styles.glowing1, { opacity: glowOpacity }]}
          />
          <Animated.View
            style={[styles.secondGlowing, styles.glowing2, { opacity: glowOpacity }]}
          />
          <Animated.View
            style={[styles.secondGlowing, styles.glowing3, { opacity: glowOpacity }]}
          />
        </View>

        <View style={styles.circle3}></View>

        <View style={styles.protonAndNeutron}>
          <View style={styles.proton} />
          <View style={styles.neutron} />
        </View>
      </View>

      <View style={styles.bodyText}>
        <Text style={{ color: 'black', fontSize: 70, textAlign: 'center' , fontWeight: 700}}>
          Or here.
        </Text>
      </View>
    </View>
  );
};

export default Page14;

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
    opacity: 0.5,
  },
  secondGlowing: {
    width: 55,
    height: 55,
    backgroundColor: 'yellow',
    position: 'absolute',
    top: -27.5,
    left: 247.5,
    zIndex: 2,
    shadowColor: 'rgba(252, 291, 82, 1)', // Increased shadow color opacity
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15, // Increased shadow radius
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
    opacity: 1,
  },
  innerCircle2: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 25,
    position: 'absolute',
    top: -25,
    left: 250,
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
    opacity: 0.5,
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
