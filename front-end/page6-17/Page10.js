import { StyleSheet, Text, View, Animated, Easing } from 'react-native'
import React, {useState, useEffect} from 'react'

const Page10 = () => {
    const [animated1] = useState(new Animated.Value(0));
    const [animated2] = useState(new Animated.Value(0));
    const [animated3] = useState(new Animated.Value(0));

    const [electronScale] = useState(new Animated.Value(1));
    // console.log("hello")
    const animateFirstElectron = () => {
        // console.log('Animating');
      Animated.loop(
        Animated.sequence([
          Animated.timing(electronScale, {
            toValue: 1.2,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(electronScale, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    // const animate = () => {
    //     Animated.loop(
    //       Animated.sequence([
    //         Animated.timing(animated1, {
    //           toValue: 1,
    //           duration: 2000, // Rotate to 180 degrees
    //           useNativeDriver: true,
    //           easing: Easing.linear,
    //         }),
    //         Animated.timing(animated1, {
    //           toValue: 0,
    //           duration: 2000, // Rotate back to 0 degrees
    //           useNativeDriver: true,
    //           easing: Easing.linear,
    //         }),
    //       ])
    //     ).start();

    //     Animated.loop(
    //         Animated.sequence([
    //           Animated.timing(animated2, {
    //             toValue: 1,
    //             duration: 3000, // Rotate to 180 degrees
    //             useNativeDriver: true,
    //             easing: Easing.linear,
    //           }),
    //           Animated.timing(animated2, {
    //             toValue: 0,
    //             duration: 3000, // Rotate back to 0 degrees
    //             useNativeDriver: true,
    //             easing: Easing.linear,
    //           }),
    //         ])
    //       ).start();

    //       Animated.loop(
    //         Animated.sequence([
    //           Animated.timing(animated3, {
    //             toValue: 1,
    //             duration: 4000, // Rotate to 180 degrees
    //             useNativeDriver: true,
    //             easing: Easing.linear,
    //           }),
    //           Animated.timing(animated3, {
    //             toValue: 0,
    //             duration: 4000, // Rotate back to 0 degrees
    //             useNativeDriver: true,
    //             easing: Easing.linear,
    //           }),
    //         ])
    //       ).start();
    };
  
    const inputRange = [0, 1];
    const outputRange = ['0deg', '150deg'];
    
  
    const rotate1 = animated1.interpolate({ inputRange, outputRange });
    const rotate2 = animated2.interpolate({ inputRange,outputRange: ['0deg', '140deg'] });
    const rotate3 = animated3.interpolate({ inputRange,outputRange: ['0deg', '130deg'] });

  return (
    <View style = {styles.container}>
      <View style = {styles.circleContainer}>
        <Animated.View style={[styles.circle, { transform: [{ rotate: rotate1 }] }]}>
            {/* <View style={styles.innerCircle} /> */}
            
            <View style={styles.innerCircle}>
                
            </View>
            <View style = {[styles.glowing, styles.glowing1]}></View>
            <View style = {[styles.glowing, styles.glowing2]}></View>
            <View style = {[styles.glowing, styles.glowing3]}></View>
        </Animated.View>

        <Animated.View style={[styles.circle2, { transform: [{ rotate: rotate2 }] }]}>
            {/* <View style={styles.innerCircle} /> */}
            <View style={styles.innerCircle2}>
                
            </View>
            <View style = {[styles.secondGlowing, styles.glowing1]}></View>
            <View style = {[styles.secondGlowing, styles.glowing2]}></View>
            <View style = {[styles.secondGlowing, styles.glowing3]}></View>
        </Animated.View>

        <Animated.View style={[styles.circle3, { transform: [{ rotate: rotate3 }] }]}>
            {/* <View style={styles.innerCircle} /> */}
            <View style={styles.innerCircle3}>
                
            </View>
            <View style = {[styles.thirdGlowing, styles.glowing1]}></View>
            <View style = {[styles.thirdGlowing, styles.glowing2]}></View>
            <View style = {[styles.thirdGlowing, styles.glowing3]}></View>
        </Animated.View>

        <View style = {styles.protonAndNeutron}>
            <View style = {styles.proton}></View>
            <View style = {styles.neutron}></View>
        </View>
        
      </View>

      {/* Text */}
      <View style = {styles.bodyText}>
        <Text style = {{color: 'white', fontSize: 70, textAlign: 'center'}}> This <Text style = {{color:'green'}}>electron</Text> has the most <Text style ={{color: 'yellow'}}>energy.</Text></Text>
      </View>
      
    </View>
  )
}

export default Page10

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: 'black',
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
        borderColor: 'white', 
        borderWidth: 2,
        position: 'absolute',
        bottom: -400,
        zIndex: 2,
        opacity:1,

        
    },
    innerCircle: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 50,
        position: 'absolute',
        top: -25,
        left: 330,
        zIndex:4,
        
        
    },
    glowing: {
        width: 70,
        height: 70,
        backgroundColor: 'yellow',    
        position: 'absolute',
        top: -35,
        left: 318,
        zIndex: 2,
        shadowColor: 'rgba(252, 291, 82, 0.8)', // Shadow color
        shadowOffset: { width: 0, height: 0 }, // Shadow offset
        shadowOpacity: 4, // Increase shadow opacity
        shadowRadius: 30, // Increase shadow radius for more glow
        borderColor: 'null',
    },
    secondGlowing: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow',    
        position: 'absolute',
        top: -10,
        left: 150,
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
        borderColor: 'white',
        borderWidth: 2,
        position: 'absolute',
        bottom: -330,
        zIndex: 4,
        opacity:0.5
      },
      innerCircle2: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 25,
        position: 'absolute',
        top: -10,
        left: 150,
        zIndex: 4
      },
      circle3: {
        width: 400,
        height: 400,
        borderRadius: 200,
        borderColor: 'white',
        borderWidth: 2,
        position: 'absolute',
        bottom: -250,
        zIndex: 4,
        opacity: 0.5
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
        textAlign: 'center',
        position: 'absolute',
        zIndex: 100,
        bottom: 50,
        fontWeight: '700',
        color: 'white',
        

      }
    
})