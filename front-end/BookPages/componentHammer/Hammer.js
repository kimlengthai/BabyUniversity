import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const Hammer = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.hammerContainer}>
      <View style={styles.head}>
        <View style={styles.headPart1} />
        <View style={styles.headPart2} />
      </View>
      <View style={styles.handle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hammerContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ rotate: '200deg' }],
    zIndex: 1,
    bottom: -110,
    left:-20,
  },
  headPart1: {
    width: 80,
    height: 60,
    backgroundColor: '#40E0D0', // Turquoise Blue
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  headPart2: {
    width: 60,
    height: 70,
    backgroundColor: '#40E0D0', // Turquoise Blue
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  handle: {
    width: 70,
    height: 130,
    backgroundColor: '#F5DEB3', // Skin color
    marginTop: -10,
    borderRadius: 5,
    bottom: 65,
    left: 15,
    transform: [{ rotate: '200deg' }],
  },
});

export default Hammer;
