import React, { useState, useEffect } from 'react';
import { View, Animated, StyleSheet, Easing, Text,TouchableOpacity } from 'react-native';
import BackButton from './BackButton';
const Page7 = () => {
    const [neutronScale] = useState(new Animated.Value(1));
    // console.log("hello")
    const animateNeutron = () => {
        // console.log('Animating');
      Animated.loop(
        Animated.sequence([
          Animated.timing(neutronScale, {
            toValue: 1.2,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(neutronScale, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

  

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.first}>
        <View style={styles.outerBorderContainer}>
          <View style={styles.outerCircle} />
        </View>
      </View>

      <View style={styles.second}>
        <View style={styles.secondBorderContainer}>
          <View style={styles.secondCircle} />
        </View>
      </View>

      <View style={styles.third}>
        <View style={styles.thirdBorderContainer}>
          <View style={styles.thirdCircle} />
        </View>
      </View>

      <View style={styles.insideTheCircle}>
        <TouchableOpacity onPress={animateNeutron}>
          <View style={styles.protonAndNeutron}>
            <View style={styles.firstRow}>
              <Animated.View
                style={[
                  styles.proton,
                  styles.proton1,
                  { backgroundColor: 'red', transform: [{ scale: neutronScale }] },
                ]}
              />
              <View style={[styles.neutron, styles.neutron1, { backgroundColor: 'blue' }]} />

            </View>
            <View style={styles.secondRow}>
            <View style={[styles.neutron, styles.neutron2, { backgroundColor: 'blue' }]} />
              <Animated.View
                style={[
                  styles.proton,
                  styles.proton2,
                  { backgroundColor: 'red', transform: [{ scale: neutronScale }] },
                ]}
              />
            </View>
          </View>
          </TouchableOpacity>
        </View>
      
        <View style = {styles.text}>
            <Text style = {{color: 'black', fontSize: 70, fontWeight: 700}}>And <Text style ={{color: 'red'}}>protons.</Text></Text>
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
    // backgroundColor: 'white',
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
  text:{
    position: 'absolute',
    zIndex: 100,
    bottom: 50,
    
  
  }
  
});

export default Page7;

