    import React, { useState, useEffect } from 'react';
    import { View, StyleSheet, Animated, Easing, TouchableOpacity, Text } from 'react-native';


    const page1 = () => {
    const [bounceValue] = useState(new Animated.Value(0));
    const [isAnimating, setIsAnimating] = useState(false);
 

  


    const startAnimation = () => {
        setIsAnimating(true);
        let bounceCount = 0;

        const bounce = () => {
        Animated.sequence([
            Animated.timing(bounceValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
            }),
            Animated.timing(bounceValue, {
            toValue: 0,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
            }),
        ]).start(() => {
            bounceCount++;
            if (bounceCount < 6) {
            bounce();
            } else {
            setIsAnimating(false);
            bounceValue.stopAnimation();
            }
        });
        };

        bounce();
    };

    const stopAnimation = () => {
        setIsAnimating(false);
        bounceValue.stopAnimation();
    };

    const ballStyle = {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'red',
        position: 'absolute',
        top: -120,
        left: -30,
        transform: [
          {
            translateY: bounceValue.interpolate({
              inputRange: [0, 0.5], // Updated inputRange
              outputRange: [-70,0], // Adjusted to 50 to limit bouncing to the top half
            }),
          },
        ],
      };
      
 
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={isAnimating ? stopAnimation : startAnimation}>
            <Animated.View style={ballStyle} />
          </TouchableOpacity>
          <Text style={{ color: 'black', fontSize: 50 }}>This is a ball</Text>
          
        </View>
      );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          position: 'relative'
        },
      
        text: {
          position: 'absolute',
          zIndex: 1, // Ensure the text is behind the ball
          transform: [{ translateY: 1000 }], // Move the text below the screen
          bottom: 0,
          fontWeight: '700',
        },
   
      });
      
    export default page1;
