import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from './BackButton';
const Page4 = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.mycanvas}>
        <View style={styles.ball}></View>
        <View style={styles.shadow}></View>
      </View>
      <Text style={styles.text}>
        This ball has <Text style={styles.zeroEnergy}>zero energy</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f5',
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%',
    height: 'auto'
  },
  mycanvas: {
    margin: 300,
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 500,
  },
  ball: {
    backgroundColor: '#004dc7',
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 1,
    position: 'absolute',
    top: 170,
    zIndex: 1,
    shadowColor: '#004dc7',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 5.5,
    shadowRadius: 25,
    elevation: 5,
  },
  shadow: {
    width: 150,
    height: 30,
    backgroundColor: 'black',
    position: 'absolute',
    top: 800,
    zIndex: -1,
    borderRadius: '40% 40% 50% 50%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 5,
  },
  text: {
    position: 'absolute',
    zIndex: 100,
    bottom: 160,
    fontWeight: '700',
    color: 'black',
    fontSize: 70,
  },
  zeroEnergy: {
    color: '#004dc7',
    fontWeight: 'bold',
  },
});

export default Page4;