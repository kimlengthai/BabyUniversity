import { StyleSheet, Text, View, Animated, Easing, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'

// import { TouchableOpacity } from 'react-native-gesture-handler';

const Page2 = () => {
    const [animated1] = useState(new Animated.Value(0));
    const [animated2] = useState(new Animated.Value(0));
    const [animated3] = useState(new Animated.Value(0));
    
  

    const animateFirstCircle = () => {
      console.log("animating first circle")
      Animated.loop(
        Animated.sequence([
          Animated.timing(animated1, {
            toValue: 1,
            duration: 1000, // Adjust the duration to control the speed of the bounce
            useNativeDriver: true,
            easing: Easing.linear,
          }),
          Animated.timing(animated1, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
        ])
      ).start();
    }
    
    const translateY = animated1.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100], // Adjust the range to control the height of the bounce
    });
    
    
    
   

  
    const inputRange = [0, 1];
    const outputRange = ['0deg', '150deg'];
    
  
    const rotate1 = animated1.interpolate({ inputRange, outputRange });
   

    return (
      <View style={styles.container}>
        <View style={styles.circleContainer}>
          <Animated.View style={[styles.circle, { transform: [{ translateY }] }]}>
            <TouchableOpacity onPress={animateFirstCircle}>
              <View style={styles.innerCircle}></View>
              <View style={[styles.glowing, styles.glowing1]}></View>
              <View style={[styles.glowing, styles.glowing2]}></View>
              <View style={[styles.glowing, styles.glowing3]}></View>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <View style={styles.bodyText}>
          <Text style={{ color: 'white', fontSize: 70 }}> <Text style={{ color: 'green' }}>Electrons</Text> have  <Text style={{ color: 'yellow' }}>energy.</Text></Text>
        </View>
        <Button title="Next" onPress={() => navigation.navigate('Page3')} />
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
export default Page2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: 'black',
    },
   
    
    innerCircle: {
      width: 100, // Increase the width
      height: 100, // Increase the height
      backgroundColor: 'red',
      borderRadius: 50,
      position: 'absolute',
      top: 215, 
      left: -25,
      zIndex: 4,
  },
  glowing: {
      width: 100, 
      height: 100, 
      backgroundColor: 'yellow',
      position: 'absolute',
      top: 215,
      left: -25, 
      zIndex: 2,
      shadowColor: 'rgba(252, 291, 82, 0.8)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 20,
      borderColor: 'null',
  },
  
    secondGlowing: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow',    
        position: 'absolute',
        top: 160,
        left: -10,
        zIndex: 2,
        shadowColor: 'rgba(252, 291, 82, 0.8)', 
        shadowOffset: { width: 0, height: 0 }, 
        shadowOpacity: 1, 
        borderColor:'null',  
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
    circle2: {
        width: 550,
        height: 550,
        borderRadius: 275,
        borderColor: 'white',
        borderWidth: 2,
        position: 'absolute',
        bottom: -330,
        zIndex: 4,
      },
      innerCircle2: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 25,
        position: 'absolute',
        top: 160,
        left: -10,
        zIndex: 4
      },
    
      bodyText: {
        position: 'absolute',
        zIndex: 100,
        bottom: 50,
        fontWeight: '700',
        color: 'white',
        

      }
    
})