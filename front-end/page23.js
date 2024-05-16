import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';
import Page22 from './page22';
import Page24 from './page24';

const Page23 = () => {
  // Animated values for arrow animation
  const [animation] = useState(new Animated.Value(0));
  const [showpage24, setShowpage24 ] = useState(false);
  const [showpage22, setShowpage22] = useState(false); 

  const handleGoBack = () =>
    {
      setShowpage22(true);
    };

  const goToPage24 = () => 
    {
      setShowpage24(true);
    }; 

  // Start arrow animations
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Interpolate animated values for arrow position
  const arrowPosition = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 400], // Start from left (-100px) to right (400px)
  });

  if (showpage22) {
    return <Page22 handleGoBack={() => setShowpage22(false)} />;
  }
  if (showpage24) 
    {
      return <Page24 goToPage24={() => setShowpage24(false)} />;
    } 

  return (
    <View style={styles.container}>
      {/* Arrows */}
      <Animated.View style={[styles.arrow, { transform: [{ translateX: arrowPosition }] }]} />
      <Animated.View style={[styles.arrow, { transform: [{ translateX: arrowPosition }] }]} />

      {/* Text */}
      <Text style={styles.text}>This amount of <Text style={styles.energy}>energy</Text> is a quantum.</Text>
       <TouchableOpacity style={styles.nextButton} onPress={goToPage24}>
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
  text: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    top: 150,
  },
  energy: {
    color: 'yellow',
  },
  arrow: {
    width: 100,
    height: 20,
    backgroundColor: 'yellow',
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -10 }, { rotate: '45deg' }], // Adjust arrow position
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

export default Page23;
