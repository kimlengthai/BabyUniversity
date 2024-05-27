import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import BackButton from './BackButton';

const Page21 = () => {
  const [animated1] = useState(new Animated.Value(0));

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

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.first}>
        <Animated.View style={[styles.outerBorderContainer, { transform: [{ rotate: rotate1 }] }]}>
          <View style={styles.outerCircle} />
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

      <View style={styles.bodyText}>
      <Text style={styles.text}>And must give <Text style={styles.energy}>energy</Text>.</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f5',
    position: 'relative',
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
    width: 350,
    height: 30,
    position: 'relative',
    zIndex: 5,
    top: 30,
  },
  protonAndNeutron:{
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
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
    zIndex: 5,
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
    height: 300,
    width: 600,
    backgroundColor: '#f3f4f5',
    zIndex: 5,
    position: 'absolute',
    top: 425,
  },
  bodyText: 
  {
    textAlign: 'center',
    position: 'absolute',
    bottom: 160,
    fontWeight: '700',
    zIndex: 200,
  },
  text:
  {
    fontSize: 70,
    color: 'black',
    zIndex: 200,
    fontWeight: '700'
  },
  energy:
  {
    color: 'yellow',
    textShadowColor: '#585858', 
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:1
  },
});
export default Page21;
