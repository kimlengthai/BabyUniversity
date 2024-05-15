import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

export default function page2() {
  const [popped, setPopped] = useState(false);
  const popAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    setPopped(!popped);
    Animated.timing(popAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(popAnim, {
        toValue: 0,
        duration: 500,
        delay: 4000,
        useNativeDriver: false,
      }).start();
    });
  };

  const popStyle = {
    transform: [
      {
        scale: popAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.2],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.sunlightContent}>
        <View style={[styles.sun, popped && styles.poppedSun]}>
          <View style={styles.ball} />
          <View style={styles.shadow} />
          <Text style={styles.box}></Text>
        </View>
        <TouchableOpacity onPress={handlePress} style={styles.sunlightBox} activeOpacity={0.8}>
          <Animated.View
            style={[
              styles.sunlightBoxSpan,
              { height: 300, width: 300 },
              popped && styles.poppedSunlightBox,
              popStyle,
            ]}
          ></Animated.View>
          <Animated.View
            style={[
              styles.sunlightBoxSpan,
              { height: 300, width: 300 },
              popped && styles.poppedSunlightBox,
              popStyle,
            ]}
          ></Animated.View>
          <Animated.View
            style={[
              styles.sunlightBoxSpan,
              { height: 300, width: 300 },
              popped && styles.poppedSunlightBox,
              popStyle,
            ]}
          ></Animated.View>
          <Animated.View
            style={[
              styles.circle,
              popped && styles.poppedCircle,
              popStyle,
            ]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
      <Text style={{ color: 'white', fontSize: 100, marginTop: 50 }}>This ball has <Text style={{ color: 'yellow' }}>energy.</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1919',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sun: {
    backgroundColor: '#fcc952',
    height: 170,
    width: 170,
    borderRadius: 100,
    borderWidth: 1,
    position: 'relative',
    overflow: 'visible',
  },
  poppedSun: {
    transform: [{ scale: 1.2 }],
  },
  ball: {
    backgroundColor: '#ff1a66',
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 1,
    position: 'absolute',
    top: '4%',
    left: '4%',
    zIndex: 1,
  },
  shadow: {
    backgroundColor: 'rgba(8, 8, 8, 1)',
    height: 40,
    width: 105,
    borderRadius: 50,
    position: 'absolute',
    top: 60,
    left: 30,
    zIndex: 1, // Changed from -1 to 1
    animation: 'shrink 0.9s infinite',
  },
  
  footer: {
    position: 'absolute',
    bottom: 20,
    fontSize: 20,
    color: 'yellow',
  },
  text: {
    position: 'absolute',
    zIndex: 100,
    bottom: 50,
    fontWeight: '700',
  },
  sunlightContent: {
    position: 'relative',
    alignItems: 'center',
  },
  sunlightBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    zIndex: 0,
  },
  sunlightBoxSpan: {
    backgroundColor: '#f8a037',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  circle: {
    backgroundColor: 'red',
    height: 300,
    width: 300,
    borderRadius: 150,
    zIndex: 2,
  },
  poppedCircle: {
    transform: [{ scale: 1.2 }],
  },
  poppedSunlightBox: {
    zIndex: 1,
  },
});
