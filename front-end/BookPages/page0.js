import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CircleAnimation from './components3/CircleAnimation3';
import Hammer from './componentHammer/Hammer';
import BackButton from './BackButton';
export default function Page0() {
  const handleHammerPress = () => 
    {
      console.log('Hammer pressed!');
    };
  
  return (
    <View style={styles.container}>
      <BackButton />
      {/* text */}
      <Text style={{ color: 'red', fontSize: 70, marginTop: 5 }}>Quantum <Text style={{ color: 'blue' }}>Physics</Text></Text>
      <Text style={{ color: 'black', fontSize: 70, marginTop: 5, marginBottom: 10, }}>for <Text style={{ color: 'red' }}>Babies.</Text></Text>
      <View style={{ flex: 1 }}>
        <CircleAnimation />
      </View>
      <View style={styles.text}>
        <Text style={{ color: 'black', fontSize: 50 }}>By <Text style={{ color: 'green' }}>Chris Ferrie</Text></Text>
      </View>

      <View style={styles.hammer}>
      <Hammer onPress={handleHammerPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#f3f4f5',
    width: '100%',
    height: '100%',
  },
  text: {
    position: 'absolute',
    zIndex: 100,
    bottom: 20,
    fontWeight: '700',
    marginTop: 100,
    color: 'black'
  },
  hammer: {
    position: 'absolute',
    top: 400,
    right: 550,
  },
});
