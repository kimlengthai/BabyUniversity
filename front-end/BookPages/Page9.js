import { StyleSheet, Text, View, Animated, Easing, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from './BackButton';

const Page9 = () => {
    const [animated1] = useState(new Animated.Value(0));
    const [animated2] = useState(new Animated.Value(0));
    const [animated3] = useState(new Animated.Value(0));
  
    // useEffect(() => {
    //   animate();
    // }, []);
    const animateFirstCircle = () => {
        console.log("animting first circle")
        Animated.loop(
            Animated.sequence([
              Animated.timing(animated1, {
                toValue: 1,
                duration: 2000, // Rotate to 180 degrees
                useNativeDriver: true,
                easing: Easing.linear,
              }),
              Animated.timing(animated1, {
                toValue: 0,
                duration: 2000, // Rotate back to 0 degrees
                useNativeDriver: true,
                easing: Easing.linear,
              }),
            ])
          ).start();
    }
    const animateSecondCircle = () => {
        Animated.loop(
            Animated.sequence([
              Animated.timing(animated2, {
                toValue: 1,
                duration: 3000, // Rotate to 180 degrees
                useNativeDriver: true,
                easing: Easing.linear,
              }),
              Animated.timing(animated2, {
                toValue: 0,
                duration: 3000, // Rotate back to 0 degrees
                useNativeDriver: true,
                easing: Easing.linear,
              }),
            ])
          ).start();
    }
    const animateThirdCircle = () => {
        Animated.loop(
            Animated.sequence([
              Animated.timing(animated3, {
                toValue: 1,
                duration: 4000, // Rotate to 180 degrees
                useNativeDriver: true,
                easing: Easing.linear,
              }),
              Animated.timing(animated3, {
                toValue: 0,
                duration: 4000, // Rotate back to 0 degrees
                useNativeDriver: true,
                easing: Easing.linear,
              }),
            ])
          ).start();
    };

  
    const inputRange = [0, 1];
    const outputRange = ['0deg', '150deg'];
    
  
    const rotate1 = animated1.interpolate({ inputRange, outputRange });
    const rotate2 = animated2.interpolate({ inputRange,outputRange: ['0deg', '140deg'] });
    const rotate3 = animated3.interpolate({ inputRange,outputRange: ['0deg', '130deg'] });

  return (
    <View style = {styles.container}>
      <BackButton />
      
      <View style = {styles.circleContainer}>
        <Animated.View style={[styles.circle, { transform: [{ rotate: rotate1 }] }]}>
            {/* <View style={styles.innerCircle} /> */}
            <TouchableOpacity onPress={animateFirstCircle}>
                <View style={styles.innerCircle}></View>
                <View style = {[styles.glowing, styles.glowing1]}></View>
                <View style = {[styles.glowing, styles.glowing2]}></View>
                <View style = {[styles.glowing, styles.glowing3]}></View>
            </TouchableOpacity>
        </Animated.View>
      
        <Animated.View style={[styles.circle2, { transform: [{ rotate: rotate2 }] }]}>
            {/* <View style={styles.innerCircle} /> */}
            <TouchableOpacity onPress={animateSecondCircle}>
                <View style={styles.innerCircle2}></View>
                <View style = {[styles.secondGlowing, styles.glowing1]}></View>
                <View style = {[styles.secondGlowing, styles.glowing2]}></View>
                <View style = {[styles.secondGlowing, styles.glowing3]}></View>
            </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.circle3, { transform: [{ rotate: rotate3 }] }]}>
            {/* <View style={styles.innerCircle} /> */}
            <TouchableOpacity onPress={animateThirdCircle}>
                <View style={styles.innerCircle3}></View>
                <View style = {[styles.thirdGlowing, styles.glowing1]}></View>
                <View style = {[styles.thirdGlowing, styles.glowing2]}></View>
                <View style = {[styles.thirdGlowing, styles.glowing3]}></View>
            </TouchableOpacity>
        </Animated.View>

        <View style = {styles.protonAndNeutron}>
            <View style = {styles.proton}></View>
            <View style = {styles.neutron}></View>
        </View>
        
      </View>

      {/* Text */}
      <View style = {styles.bodyText}>
        <Text style = {{color: 'black', fontSize: 70, fontWeight: 700 }}> <Text style = {{color:'green'}}>Electrons</Text> have  <Text style ={{color: 'yellow', textShadowColor: '#585858', textShadowOffset:{width: 1, height: 1},textShadowRadius:1}}>energy.</Text></Text>
      </View>
      
    </View>
  )
}

export default Page9

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#BDC2C8',
        width: '100%',
        height: 'auto'
    },
    circleContainer:{
        width: 900,
        height: 400,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',    
        // justifyContent: 'center',   
        alignItems: 'center',
        
        
    },
    circle: {
        width: 700,
        height: 700,
        // backgroundColor: 'orange',
        borderRadius: 350,
        borderColor: 'black', 
        borderWidth: 2,
        position: 'absolute',
        bottom: -400,
        zIndex: 2,
        

        
    },
    innerCircle: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 50,
        position: 'absolute',
        top: 230,
        left: -10,
        zIndex:4,
        
        
    },
    glowing: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow',    
        position: 'absolute',
        top: 230,
        left: -10,
        zIndex: 2,
        shadowColor: 'rgba(252, 291, 82, 0.8)', // Shadow color
        shadowOffset: { width: 0, height: 0 }, // Shadow offset
        shadowOpacity: 1, // Increase shadow opacity
        shadowRadius: 20, // Increase shadow radius for more glow
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
        shadowColor: 'rgba(252, 291, 82, 0.8)', // Shadow color
        shadowOffset: { width: 0, height: 0 }, // Shadow offset
        shadowOpacity: 1, // Shadow opacity
        shadowRadius: 12, // Shadow radius 
        borderColor:'null',  
    },
    thirdGlowing: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow',    
        position: 'absolute',
        top: 90,
        left: -10,
        zIndex: 2,
        shadowColor: 'rgba(252, 291, 82, 0.8)', // Shadow color
        shadowOffset: { width: 0, height: 0 }, // Shadow offset
        shadowOpacity: 1, // Shadow opacity
        shadowRadius: 12, // Shadow radius 
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
        borderColor: 'black',
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
      circle3: {
        width: 400,
        height: 400,
        borderRadius: 200,
        borderColor: 'black',
        borderWidth: 2,
        position: 'absolute',
        bottom: -250,
        zIndex: 4,
      },
      innerCircle3: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 25,
        position: 'absolute',
        top: 90,
        left: -10,
        zIndex: 4
      },
      protonAndNeutron: {
        position: 'relative',
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: 'white',
        bottom: -320
      },
      proton: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'red',
        position: 'absolute',
        left: -70,
        bottom: -80

      },
      neutron: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'blue',
        position: 'absolute',
        right: -70,
        bottom: -80
      },
      bodyText: {
        position: 'absolute',
        zIndex: 100,
        bottom: 50,
        fontWeight: '700',
        color: 'white',
        

      }
    
})