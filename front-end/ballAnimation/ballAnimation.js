import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Easing, Image, KeyboardAvoidingView } from 'react-native';
import phyDoodleShapes from '../assets/BgImage/doodle.png';
import { useFonts, Itim_400Regular } from '@expo-google-fonts/itim';
 
const { width, height } = Dimensions.get("window");
const circleWidth = width / 2;

//Wrapped ball and shadows into one component
const ShadowAndBallComponent = ({ translation }) => {
  return (
    <View style={styles.shadowAndBallContainer}>
      <View style={styles.shadow} />
      <View style={styles.shadow2} />
      <View style={styles.shadow3} />
      <Animated.View
        style={[
          styles.ball,
          {
            transform: [{ translateY: translation.y }, { translateX: translation.x }],
          },
        ]}
      />
    </View>
  );
};
/*
const getFonts = () => Font.loadAsync({
  'Itim-Regular': require('./assets/fonts/Itim-Regular.ttf')
});*/

const UIAnimation = () => {

  let [fontsLoaded] = useFonts({ Itim_400Regular });
 
  const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
 
  useEffect(() => {
    
    /*Ball bouncing*/
    // Using Animated.parallel for combining the x and y values together
    Animated.sequence([
      Animated.timing(translation.y, { toValue: 10, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
      Animated.timing(translation.y, { toValue: 250, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
      Animated.parallel([
        Animated.timing(translation.x, {
          toValue: 150,
          useNativeDriver: true,
        }),
        Animated.timing(translation.y, {
          toValue: 120,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(translation.x, { toValue: 150, duration: 1000, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(translation.y, { toValue: 310, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
      Animated.parallel([
        Animated.timing(translation.x, {
          toValue: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translation.y, {
          toValue: 185,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(translation.x, { toValue: 300, duration: 1000, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(translation.y, { toValue: 390, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
      Animated.parallel([
        Animated.timing(translation.x, {
          toValue: 358,
          useNativeDriver: true,
        }),
        Animated.timing(translation.y, {
          toValue: 320,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(translation.x, { toValue: 360, duration: 1000, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(translation.y, { toValue: 445, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
    ]).start();
   
  }, []);
 
  const move = useRef(new Animated.Value(0)).current;
 
  Animated.loop(
    Animated.sequence([
      Animated.timing(move, { toValue: 1, duration: 4000, useNativeDriver: true }),
      Animated.timing(move, { toValue: 0, duration: 4000, useNativeDriver: true }),
    ])
  ).start();
 
  const translate = move.interpolate({
    inputRange: [0, 1],
    outputRange: [0, circleWidth / 6],
  });
 
  //This is for circle breathing animation size
  const scale = move.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1.1],
  });


  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  else{

  
  return (
    <KeyboardAvoidingView style = {styles.container}
      behavior='padding'>
        <View style={styles.container}>
          <Image source={phyDoodleShapes} style={[styles.backgroundImage, { transform: [{ scaleX: -1 }] }]} />
          <Text style={[styles.babyUniversity, { fontFamily: 'Itim_400Regular', fontSize: 80 }]}>Baby University</Text>
          <View style={styles.coveringI} />
          <ShadowAndBallComponent translation={translation} />
          {[...Array(1)].map((_, index) => (
            <Animated.View
              key={index}
              style={[
                styles.ballYellowTop,
                { top: -100 },
                { transform: [{ scale: scale }] },
              ]}
            />
          ))}
          <Animated.View
            style={[
              styles.ballYellowBottom,
              { transform: [{ scale: scale }] },
            ]}
          />
          <Animated.View
            style={[
              styles.ballRed,
              { transform: [{ scale: scale }] },
            ]}
          />
          <Animated.View
            style={[
              styles.ballGreenRight,
              { transform: [{ scale: scale }] },
            ]}
          />
          <Animated.View
            style={[
              styles.ballGreenBottom,
              { transform: [{ scale: scale }] },
            ]}
          />
        </View>
      </KeyboardAvoidingView>
  );
}
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    marginTop: -100,
    marginBottom: -350,
  },
  babyUniversity: {
    color: 'darkblue',
    marginBottom: 30,
    textAlign: 'center',
    bottom: 550,
    zIndex: -3,
  },
  coveringI: {
    backgroundColor: 'lightblue',
    width: 15,
    height: 15,
    top: -655,
    left: 192,
    zIndex: -1,
    borderRadius: 50,
  },
  shadowAndBallContainer: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ball: {
    backgroundColor: '#dd3434',
    width: 30,
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    left: -135,
    top: -1130,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  shadow: {
    width: 100,
    height: 20,
    backgroundColor: 'gray',
    borderRadius: 50,
    top: -880,
    left: -170,
    boxShadow: '0 0 10px black',
    zIndex: -1,
  },
  shadow2: {
    width: 100,
    height: 20,
    backgroundColor: 'gray',
    borderRadius: 50,
    top: -840,
    left: -20,
    boxShadow: '0 0 10px black',
    zIndex: -1,
  },
  shadow3: {
    width: 100,
    height: 20,
    backgroundColor: 'gray',
    borderRadius: 50,
    top: -780,
    left: 125,
    boxShadow: '0 0 10px black',
    zIndex: -1,
  },
  ballYellowTop: {
    backgroundColor: 'rgb(246, 255, 44)',
    borderRadius: 75,
    position: 'absolute',
    left: 800,
    width: 150,
    height: 150,
  },
  ballYellowBottom: {
    backgroundColor: 'rgb(246, 255, 44)',
    borderRadius: 75,
    position: 'absolute',
    width: 160,
    height: 160,
    right: 250,
    bottom: -100,
  },
  ballRed: {
    backgroundColor: 'rgb(251, 114, 126)',
    borderRadius: 75,
    position: 'absolute',
    width: 150,
    height: 150,
    left: 100,
    top: 10,
  },
  ballGreenRight: {
    backgroundColor: 'rgb(162, 193, 60)',
    borderRadius: 125,
    position: 'absolute',
    width: 220,
    height: 220,
    right: 100,
    top: 10,
  },
  ballGreenBottom: {
    backgroundColor: 'rgb(162, 193, 60)',
    borderRadius: 125,
    position: 'absolute',
    width: 220,
    height: 220,
    left: 200,
    bottom: -100,
  },
});
 
export default UIAnimation;
 
