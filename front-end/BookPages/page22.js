import React, { useState, useEffect } from 'react';
import { View, Animated, StyleSheet, Easing, Text, TouchableOpacity } from 'react-native';
import Page21 from '../BookPages/page21';
import Page23 from '../BookPages/page23';

const Page22 = () => {
  const [animated2] = useState(new Animated.Value(0));
  const [showpage23, setShowpage23 ] = useState(false);
  const [showpage21, setShowpage21] = useState(false);

  const handleGoBack = () =>
    {
      setShowpage21(true);
    };

  const goToPage23 = () => 
    {
      setShowpage23(true);
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
  
  if (showpage21) {
    return <Page21 handleGoBack={() => setShowpage21(false)} />;
  }
  if (showpage23) 
    {
      return <Page23 goToPage23={() => setShowpage23(false)} />;
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
      <Text style={styles.text}>To fall down.</Text>
      <TouchableOpacity style={styles.nextButton} onPress={goToPage23}>
      <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
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
    zIndex: 5,
    top: 125,
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
    borderTopLeftRadius: 275, 
    borderTopRightRadius: 275,
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
    zIndex: 5,
  },
  secondCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'green',
    position: 'absolute',
    top: 180,
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
    zIndex: 5,
    position: 'absolute',
    top: 423.23,
  },
  text:
  {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    bottom: -200,
    zIndex: 6,
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
    zIndex: 6,
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
  goBackButton:
  {
    color: '#292D32',
    borderRadius: '20%',
    backgroundColor: 'green',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    bottom: -170,
    right: 190,
    zIndex: 6,
  },
  goBack:
  {
    width: 77,
    height: 77,
  },
});

export default Page22;
