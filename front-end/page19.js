import React, { useState, useEffect } from 'react';
import { View, Animated, StyleSheet, Easing, Text, TouchableOpacity } from 'react-native';
import Page18 from './page18';
import Page20 from './page20'; // Import the Page20 component

const Page19 = () => {
  const [animated2] = useState(new Animated.Value(0));
  const [showpage20, setShowpage20 ] = useState(false);
  const [showpage18, setShowpage18] = useState(false); // State to toggle ParentUI

  const handleGoBack = () =>
    {
      setShowpage18(true); // Set showpage18 state to true
    };

  const goToPage20 = () => 
    {
      setShowpage20(true);
    };

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
  const outputRange = ['0deg', '180deg'];

  const rotate2 = animated2.interpolate({ inputRange, outputRange });
  
  //if showParentUI is true
  //return handlGoeBack
  if (showpage18) {
    // passing a handleGoBack function to toggle the showParentUI state
    return <Page18 handleGoBack={() => setShowpage18(false)} />;
  }
  if (showpage20) 
    {
      return <Page20 goToPage20={() => setShowpage20(false)} />;
    }

  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <View style={[styles.outerBorderContainer]}>
        </View>
      </View>
      <View style={styles.cover}></View>

      <View style={styles.second}>
        <Animated.View style={[styles.secondBorderContainer, { transform: [{ rotate: rotate2 }] }]}>
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
      <Text style={styles.text}>An <Text style={styles.textElectron}>electron</Text> can take <Text style={styles.textEnergy}>energy</Text>.</Text>
      <TouchableOpacity style={styles.nextButton} onPress={goToPage20}>
      <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goBackIcon} onPress={handleGoBack}>
      <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
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
  text:
  {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    bottom: -150,
    zIndex: 201,
  },
  textElectron:
  {
    color: 'green',
    fontWeight: 'bold',
  },
  textEnergy:
  {
    color: 'yellow',
    fontWeight: 'bold',
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
    backgroundColor: 'white',
    zIndex: 100,
    top: 50,
  },
  protonAndNeutron:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'relative',
    width: 'auto',
    height: 'auto',
  },
  outerBorderContainer: {
    width: 550,
    height: 550,
    /*borderRadius: 550,*/
    borderTopLeftRadius: 275, 
    borderTopRightRadius: 275,
   /* borderWidth: 3,*/
    borderBottomWidth: 0, 
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderColor: 'black',
    position: 'relative',
  },
  secondBorderContainer: {
    width: 450,
    height: 450,
    borderRadius: 450,
    borderWidth: 3,
    borderColor: 'black',
    position: 'relative',
    zIndex: 99,
  },
  secondCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'green',
    position: 'absolute',
    top: 170,
    left: -30,
  },
  thirdBorderContainer: {
    width: 300,
    height: 300,
    /*borderRadius: 350,
    borderWidth: 3,*/
    borderTopLeftRadius: 150, 
    borderTopRightRadius: 150,
    borderBottomWidth: 0,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderColor: 'black',
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
    backgroundColor: 'grey',
    zIndex: 200,
    position: 'absolute',
    top: 423.23,
  },
  nextButton:
  {
    backgroundColor: '#A2C13C',
    borderRadius: '20%',
    zIndex: 1,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    bottom: -250,
    zIndex: 202,
  },
  buttonText: 
  {
    color: '#000000',
    fontSize: 40,
    /*fontFamily: 'Itim_400Regular',*/
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },
  goBackIcon:
  {
    color: '#292D32',
    borderRadius: '20%',
    /*backgroundColor: 'transparent',*/
    backgroundColor: 'green',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    bottom: -170,
    right: 190,
    zIndex: 220,
  },
  goBack:
  {
    width: 77,
    height: 77,
  },
});

export default Page19;
