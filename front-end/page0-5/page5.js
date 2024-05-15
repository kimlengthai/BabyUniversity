import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.outerCircle}>
        <View style={styles.magnifyGlass}></View>
        <View style={styles.ball}></View>
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
    fontFamily: 'Nunito Sans',
    fontWeight: 'bold',
  },
  outerCircle: {
    width: 450,
    height: 450,
    borderWidth: 15,
    borderColor: 'black',
    borderRadius: 225,
    backgroundColor: 'rgb(172, 235, 235)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    shadowColor: 'rgba(255, 255, 255, 0.5)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  magnifyGlass: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    position: 'absolute',
    right: -330,
    bottom: -880,
    transform: [{ rotate: '310deg' }],
  },
  ball: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: -580,
    left: 580,
    zIndex: -1,
  },
  footer: {
    position: 'absolute',
    top: '80%',
    left: '80%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    fontSize: 60,
    height: 'auto',
    width: '100%',
  },
});
