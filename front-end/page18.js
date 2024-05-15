import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, Easing, TouchableOpacity } from 'react-native';
import Page19 from './page19'; 

const page18 = () => {
  const [animation] = useState(new Animated.Value(0));
  const [showPage19, setShowPage19 ] = useState(false); //Create a variable for going to page 19

  /* A handler of navigating to page 19 */
  const goToPage19 = () => 
    {
      setShowPage19(true);
    };

  useEffect(() => {
    /*Sets up a continuous loop of animation */
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Bottom left
  const redBallStyle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 100], // Adjust as needed
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 80], // Adjust as needed
        }),
      },
    ],
  };

  // Top right
  const redBall2Style = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -100], // Adjust as needed
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80], // Adjust as needed
        }),
      },
    ],
  };

  // Bottom right
  const blueBallStyle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 100], // Adjust as needed
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 37], // Adjust as needed
        }),
      },
    ],
  };

  // Top left
  const blueBall2Style = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -100], // Adjust as needed
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -40], // Adjust as needed
        }),
      },
    ],
  };

  // At the top
  const greenBallStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70], // Adjust as needed
        }),
      },
    ],
  };

  /* A conditional rendering based on the showPage19 */
  if (showPage19) 
    {
      /* If showPage19 is true, render Page19 */
      /* If false, nothing is rendered. */
      return <Page19 goToPage19={() => setShowPage19(false)} />;
    }

  return (
    <View style={styles.container}>
      <Animated.View style = {[styles.redBall, redBallStyle]}></Animated.View>
      <Animated.View style = {[styles.blueBall, blueBallStyle]}></Animated.View>
      <Animated.View style = {[styles.greenBall, greenBallStyle]}></Animated.View>
      <Animated.View style = {[styles.redBall2, redBall2Style]}></Animated.View>
      <Animated.View style = {[styles.blueBall2, blueBall2Style]}></Animated.View>

      <View>
      <View style = {styles.skip}></View>
      <View style = {styles.line}></View>
      </View>
      
      <Text style={styles.text}>There are no <Text style={styles.electronText}>electron</Text> with zero energy.</Text>

      <TouchableOpacity style={styles.goBackButton} /*onPress={handleGoBack}*/>
      <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButton} onPress={goToPage19}>
      <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  redBall: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: 'red',
    borderWidth: 2,
    right: 20,
    top: 330,
    zIndex: -3, // Bottom left
  },
  blueBall: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: 'blue',
    borderWidth: 2,
    left: 20,
    top: 250, // Bottom right
  },
  greenBall: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: 'green',
    borderWidth: 2,
    top: 80,
    left: 10,
    zIndex: 1,
  },
  redBall2: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: 'red',
    borderWidth: 2,
    top: 90,
    left: 30, // Top right
  },
  blueBall2: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: 'blue',
    borderWidth: 2,
    right: 10,
    top: 10,
    zIndex: -2, // Top left
  },
  skip: {
    width: 350,
    height: 350,
    borderRadius:'180%',
    borderWidth: 15,
    borderColor: 'red',
    zIndex: 2,
    bottom: 200,
  },
  line:
  {
    position: 'absolute',
    width: '28%',
    height: 15,
    backgroundColor: 'red',
    top: '35%',
    transform: [{ translateY: -155 }, { rotate: '145deg' }],
  },
  text:
  {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    bottom: 180,
    /*fontFamily: 'Itim_400Regular',*/
  },
  electronText: {
    color: 'green',
    fontWeight: 'bold',
  },
  goBackButton:
  {
    color: '#292D32',
    borderRadius: '20%',
    backgroundColor: 'green',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    bottom: 60,
    right: 190,
    zIndex: 220,
  },
  goBack:
  {
    width: 77,
    height: 77,
  },
  nextButton:
  {
    backgroundColor: '#A2C13C',
    borderRadius: '20%',
    zIndex: 1,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    bottom: 140,
  },
  buttonText: 
  {
    color: '#000000',
    fontSize: 40,
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },
});

export default page18;
