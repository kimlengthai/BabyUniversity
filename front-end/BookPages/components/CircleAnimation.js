import React, { useState, useEffect } from 'react';
import { View, Animated, StyleSheet, Easing, Text, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const CircleAnimation = () => {
  const [animated1] = useState(new Animated.Value(0));
  const [animated2] = useState(new Animated.Value(0));
  const [animated3] = useState(new Animated.Value(0));


  const animateFirstCircle = () => {
    console.log("animting first circle")
    Animated.loop(
      Animated.timing(animated1, {
        toValue: 1,
        duration: 3500,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  };
  const animateSecondCircle = () => {
    Animated.loop(
      Animated.timing(animated2, {
        toValue: 1,
        duration: 4500,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  };
  const animateThirdCircle = () => {
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

  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Animated.View style={[styles.outerBorderContainer, { transform: [{ rotate: rotate1 }] }]}>
          <TouchableOpacity onPress={animateFirstCircle}> 
            <View style={styles.outerCircle} />
          </TouchableOpacity>
        </Animated.View>
      </View>

      <View style={styles.second}>
        <Animated.View style={[styles.secondBorderContainer, { transform: [{ rotate: rotate2 }] }]}>
          <TouchableOpacity onPress={animateSecondCircle}>
            <View style={styles.secondCircle} />
          </TouchableOpacity>
          
        </Animated.View>
      </View>

      <View style={styles.third}>
        <Animated.View style={[styles.thirdBorderContainer, { transform: [{ rotate: rotate3 }] }]}>
          <TouchableOpacity onPress={animateThirdCircle}>
            <View style={styles.thirdCircle} />
          </TouchableOpacity>
        </Animated.View>
      </View>

      {/* Inside the circle */}
      <View style={styles.insideTheCircle}>
        <View style = {styles.protonAndNeutron}>
          <View style = {styles.firstRow}>
            <View style={[styles.proton, styles.proton1,{ backgroundColor: 'blue' }]}></View>
            <View style={[styles.neutron, styles.neutron1, { backgroundColor: 'red' }]}></View>
          </View>
          <View style = {styles.secondRow}>
            <View style={[styles.neutron, styles.neutron2, { backgroundColor: 'red' }]}></View>
            <View style={[styles.proton, styles.proton2, { backgroundColor: 'blue' }]}></View>
          </View>
        </View>
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
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // backgroundColor: 'white',
    zIndex: 100,
  },

  protonAndNeutron:{
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    // width: 'auto',
    // height: 'auto',
  },
  proton:{
    width: 80,
    height: 80,
    borderRadius: 40,
    borderBlockColor: 'black',
    borderWidth: 2,
   
  },

  /// something is wrong with row 
  neutron:{
    width: 80,
    height: 80,
    borderRadius: 40,
    borderBlockColor: 'black',
    borderWidth: 2,
   
  },
  neutron2:{
    position: 'absolute',
    zIndex: 7,
    bottom: -20,
    left:-20,
    
  },
  proton2:{
    position: 'absolute',
    zIndex: 6,
    bottom: -20,
    right:-20
  },
  proton1:{
    position: 'absolute',
    zIndex: 5,
    top: -20,
    left:-20
  },
  neutron1:{ 
    position: 'absolute',
    zIndex: 4,
    top: -20,
    right:-20
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
    top: 0,
    left: 130,
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
    left: -20,
  },
  thirdBorderContainer: {
    width: 300,
    height: 300,
    borderRadius: 350,
    borderWidth: 3,
    borderColor: 'black',
    position: 'relative',
  },
  thirdCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'green',
    position: 'absolute',
    top: 170,
    left: -20,
  },
  
});

export default CircleAnimation;
