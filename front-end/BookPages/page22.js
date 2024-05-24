import React, { useState, useEffect } from 'react';
import { View, Animated, StyleSheet, Easing, Text } from 'react-native';
import BackButton from './BackButton';

const Page22 = () => {
  const [animated2] = useState(new Animated.Value(0));

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated2, {
        toValue: 1,
        duration: 2250,
        useNativeDriver: true,
        easing: Easing.linear,
        }),
        Animated.timing(animated2, {
        toValue: 0,
        duration: 2250, // Half of the total duration (4500ms / 2)
        useNativeDriver: true,
        easing: Easing.linear,
        }),
      ]),
    ).start();
  };

  const inputRange = [0, 1];
  const outputRange = ['0deg', '190deg'];

  const rotate2 = animated2.interpolate({ inputRange, outputRange });

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.first}>
        <View style={[styles.outerBorderContainer]}>
        </View>
      </View>
      <View style={styles.cover}></View>

      <View style={styles.second}>
        <Animated.View style={[styles.secondBorderContainer , { transform: [{ rotate: rotate2 }] }]}>
          <View style={[styles.secondCircle]}>
          </View>
        </Animated.View>
      </View>
      <View style={styles.third}>
        <View style={[styles.thirdBorderContainer]}>
        </View>
      </View>

      {/* Inside the circle */}
      <View style={styles.insideTheCircle}>
        <View style = {styles.protonAndNeutron}>
          <View style={styles.blueBall}></View>
          <View style={styles.redBall}></View>
        </View>
      </View>

      <View style={styles.bodyText}>
      <Text style={styles.text}>To fall down.</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    position: 'relative',
    width: '100%',
    height: 'auto'
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
  insideTheCircle:{
    width: 350,
    height: 30,
    position: 'relative',
    zIndex: 5,
    top: 60,
  },
  protonAndNeutron:{
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  outerBorderContainer: {
    width: 550,
    height: 550,
    borderTopLeftRadius: 275, 
    borderTopRightRadius: 275,
    borderBottomWidth: 0, 
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderColor: 'white',
    position: 'relative',
  },
  secondBorderContainer: {
    width: 450,
    height: 450,
    borderRadius: 450,
    borderWidth: 3,
    borderColor: 'white',
    position: 'relative',
    zIndex: 5,
  },
  secondCircle: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: 'green',
    position: 'absolute',
    top: 215,
    left: -30,
  },
  thirdBorderContainer: {
    width: 300,
    height: 300,
    borderTopLeftRadius: 150, 
    borderTopRightRadius: 150,
    borderBottomWidth: 0,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderColor: 'white',
    position: 'relative',
  },
  redBall: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 30,
    borderWidth: 2,
    left: 10,
    top: -90,
  },
  blueBall: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 30,
    borderWidth: 2,
    right: 25,
    top: -30,
  },
  cover:
  {
    height: 280,
    width: 600,
    backgroundColor: 'black',
    zIndex: 5,
    position: 'absolute',
    top: 450,
  },
  bodyText: 
  {
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    fontWeight: '700',
    zIndex: 200,
  },
  text:
  {
    fontSize: 70,
    color: 'white',
    zIndex: 6,
  },
});

export default Page22;
