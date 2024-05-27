import React, { useState, useEffect } from 'react';
import { View, Animated, StyleSheet, Easing, Text, TouchableOpacity } from 'react-native';
import BackButton from './BackButton';
const Page5 = () => {
  const [animated1] = useState(new Animated.Value(0));
  const [animated2] = useState(new Animated.Value(0));
  const [animated3] = useState(new Animated.Value(0));
  const [animated4] = useState(new Animated.Value(0));

  const animateFirstCircle = () => {
    console.log("animating first circle");
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated4, {
          toValue: 1,
          duration: 1000, // Adjust the duration to control the speed of the bounce
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(animated4, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.loop(
      Animated.timing(animated1, {
        toValue: 1,
        duration: 3500,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();

    Animated.loop(
      Animated.timing(animated2, {
        toValue: 1,
        duration: 4500,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();

    Animated.loop(
      Animated.timing(animated3, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  };

  const inputRange = [0, 1];
  const outputRange = ['0deg', '360deg'];

  const rotate1 = animated1.interpolate({ inputRange, outputRange });
  const rotate2 = animated2.interpolate({ inputRange, outputRange });
  const rotate3 = animated3.interpolate({ inputRange, outputRange });

  const scale = animated4.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5], // Adjust the range to control the scaling effect
  });

  const handleBallPress = () => {
    animateFirstCircle(); // Start the animation when the ball is pressed
  };

  return (
    <View style={styles.container}>
        <BackButton />
        <View style={styles.magnifyGlass}></View>
        <View style={styles.first}>
          <Animated.View style={[styles.outerBorderContainer, { transform: [{ rotate: rotate1 }] }]}>
            <View style={styles.outerCircle} />
          </Animated.View>
        </View>

        <View style={styles.second}>
          <Animated.View style={[styles.secondBorderContainer, { transform: [{ rotate: rotate2 }] }]}>
            <View style={styles.secondCircle} />
          </Animated.View>
        </View>

        <View style={styles.third}>
          <Animated.View style={[styles.thirdBorderContainer, { transform: [{ rotate: rotate3 }] }]}>
            <View style={styles.thirdCircle} />
          </Animated.View>
        </View>

        {/* Inside the circle */}
        <View style={styles.insideTheCircle}>
          <View style={styles.protonAndNeutron}>
            <View style={styles.firstRow}>
              <View style={[styles.proton, styles.proton1, { backgroundColor: 'blue' }]}></View>
              <View style={[styles.neutron, styles.neutron1, { backgroundColor: 'red' }]}></View>
            </View>
            <View style={styles.secondRow}>
              <View style={[styles.neutron, styles.neutron2, { backgroundColor: 'red' }]}></View>
              <View style={[styles.proton, styles.proton2, { backgroundColor: 'blue' }]}></View>
            </View>
          </View>
        </View>

        <View style={styles.line}></View>

        <TouchableOpacity onPress={handleBallPress} style={styles.touchableArea}>
          <Animated.View style={[styles.ball, { transform: [{ scale }] }]} />
        </TouchableOpacity>

        

        <View style = {styles.bodyText}>
            <Text style = {{color: 'black', fontSize: 70, fontWeight: 700}}>All balls are made of atoms.</Text>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#f3f4f5',
    width: '100%',
    height: 'auto'
  },
  touchableArea: {
    width: 200, // Set the width to match the ball width
    height: 200, // Set the height to match the ball height
    position: 'absolute',
    borderRadius: 100, // Adjusted to match the ball's border radius
    right: 10, // Adjusted to match the ball's position
    bottom: 0, // Adjusted to match the ball's position
  },  
  magnifyGlass: {
    width: 400,
    height: 400,
    backgroundColor: 'turquoise',
    position: 'absolute',
    right: 400,
    bottom: 220,
    transform: [{ rotate: '310deg' }],
    zIndex: 1,
    borderRadius: 200,
    borderWidth: 10, // Increased thickness
    borderColor: 'black', // White color
  },
  ball: {
    backgroundColor: 'yellow', // Change to yellow color
    width: 200,
    height: 200,
    borderWidth: 5, // Set border width to 5
    borderColor: 'blue', // Set border color to black
    position: 'absolute',
    borderRadius: 100,
    right: 650,
    bottom: 250,
    zIndex: 0, // Set zIndex behind the magnifyingGlass
  },  
  line:
  {
    width: 200,
    height: 50, 
    backgroundColor: "black",
     borderRadius: 2,
     top: 120,
     left: 240,
     zIndex: 2,
     transform: [{ rotate: '36deg' }],
  },
  first: {
    position: 'absolute',
    zIndex: 1,
  },
  second: {
    position: 'absolute',
    zIndex: 2,
  },
  third: {
    position: 'absolute',
    zIndex: 3,
  },
  insideTheCircle: {
    width: 100, // Reduced size
    height: 100, // Reduced size
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 100,
  },

  protonAndNeutron: {
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    top: 25,
  },
  proton: {
    width: 40, // Reduced size
    height: 40, // Reduced size
    borderRadius: 20, // Adjusted to match new size
    borderBlockColor: 'black',
    borderWidth: 2,
  },
  neutron: {
    width: 40, // Reduced size
    height: 40, // Reduced size
    borderRadius: 20, // Adjusted to match new size
    borderBlockColor: 'black',
    borderWidth: 2,
  },
  neutron2: {
    position: 'absolute',
    zIndex: 7,
    bottom: -10, // Adjusted for smaller size
    left: -10, // Adjusted for smaller size
  },
  proton2: {
    position: 'absolute',
    zIndex: 6,
    bottom: -10, // Adjusted for smaller size
    right: -10, // Adjusted for smaller size
  },
  proton1: {
    position: 'absolute',
    zIndex: 5,
    top: -10, // Adjusted for smaller size
    left: -10, // Adjusted for smaller size
  },
  neutron1: {
    position: 'absolute',
    zIndex: 4,
    top: -10, // Adjusted for smaller size
    right: -10, // Adjusted for smaller size
  },
  outerBorderContainer: {
    width: 275, // Reduced size
    height: 275, // Reduced size
    borderRadius: 275, // Adjusted to match new size
    borderWidth: 3,
    borderColor: 'black',
    position: 'relative',
  },
  outerCircle: {
    width: 25, // Reduced size
    height: 25, // Reduced size
    borderRadius: 25, // Adjusted to match new size
    backgroundColor: 'green',
    position: 'absolute',
    top: 0,
    left: 65, // Adjusted to match new size
  },
  secondBorderContainer: {
    width: 225, // Reduced size
    height: 225, // Reduced size
    borderRadius: 225, // Adjusted to match new size
    borderWidth: 3,
    borderColor: 'black',
    position: 'relative',
    zIndex: 99,
  },
  secondCircle: {
    width: 25, // Reduced size
    height: 25, // Reduced size
    borderRadius: 25, // Adjusted to match new size
    backgroundColor: 'green',
    position: 'absolute',
    top: 85, // Adjusted to match new size
    left: -10, // Adjusted to match new size
  },
  thirdBorderContainer: {
    width: 150, // Reduced size
    height: 150, // Reduced size
    borderRadius: 150, // Adjusted to match new size
    borderWidth: 3,
    borderColor: 'black',
    position: 'relative',
  },
  thirdCircle: {
    width: 25, // Reduced size
    height: 25, // Reduced size
    borderRadius: 25, // Adjusted to match new size
    backgroundColor: 'green',
    position: 'absolute',
    top: 85, // Adjusted to match new size
    left: -10, // Adjusted to match new size
  },
  bodyText: {
    position: 'absolute',
    zIndex: 100,
    bottom: 50,
    fontWeight: '700',
    color: 'white',
  }
});

export default Page5;
