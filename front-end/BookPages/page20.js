import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';
import Page19 from '../BookPages/page19';
import Page21 from './page21';

const Page20 = () => {
  const [animated1] = useState(new Animated.Value(0));
  const [showpage21, setShowpage21 ] = useState(false);
  const [showpage19, setShowpage19] = useState(false);

  const handleGoBack = () =>
    {
      setShowpage19(true);
    };
    const goToPage21 = () => 
      {
        setShowpage21(true);
      };

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.loop(
      Animated.sequence([
      Animated.timing(animated1, {
        toValue: 1,
        duration: 1750,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(animated1, {
        toValue: 0,
        duration: 1750,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]),
    ).start();
  };

  const inputRange = [0, 1];
  const outputRange = ['0deg', '180deg'];

  const rotate1 = animated1.interpolate({ inputRange, outputRange });

  if (showpage19) 
    {
      /* If showPage19 is true, render Page19 */
      /* If false, nothing is rendered. */
    return <Page19 handleGoBack={() => setShowpage19(false)} />;
  }
  if (showpage21) 
    {
      /* If showPage21 is true, render Page21 */
      /* If false, nothing is rendered. */
      return <Page21 goToPage21={() => setShowpage21(false)} />;
    }

  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Animated.View style={[styles.outerBorderContainer, { transform: [{ rotate: rotate1 }] }]}>
          <View style={styles.outerCircle} />
          <View style = {[styles.glowing, styles.glowing1]}></View>
            <View style = {[styles.glowing, styles.glowing2]}></View>
            <View style = {[styles.glowing, styles.glowing3]}></View>
        </Animated.View>
      </View>

      <View style={styles.cover}></View>

      <View style={styles.second}>
        <View style={[styles.secondBorderContainer]}>   
        </View>
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

      <Text style={styles.text}>To jump up.</Text>

      <TouchableOpacity style={styles.nextButton} onPress={goToPage21}>
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
  outerBorderContainer: {
    width: 550,
    height: 550,
    borderRadius: 550,
    borderWidth: 3,
    borderColor: 'black',
    position: 'relative',
  },
  outerCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'green',
    position: 'absolute',
    top: 250,
    left: -30,
    zIndex: 5,
  },
  glowing: {
    width: 70,
    height: 70,
    backgroundColor: 'yellow',    
    position: 'absolute',
    top: 240,
    left: -40,
    zIndex: 4,
    shadowColor: 'rgba(252, 291, 82, 0.8)', // Shadow color
    shadowOffset: { width: 0, height: 0 }, // Shadow offset
    shadowOpacity: 3, // Increase shadow opacity
    shadowRadius: 40, // Increase shadow radius for more glow
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
  secondBorderContainer: {
    width: 450,
    height: 450,
    borderTopLeftRadius: 230, 
    borderTopRightRadius: 230,
    borderBottomWidth: 0,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderColor: 'black',
    position: 'relative',
    zIndex: 6,
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
    width: 800,
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
});
export default Page20;
