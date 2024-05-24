import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import MenuButton from '../MenuButton';

import backgroundDoodle from '../assets/bedRoomImages/background_doodle.png';
import clock from '../assets/bedRoomImages/clock.png';
import books from '../assets/bedRoomImages/books.png';
import canvas from '../assets/bedRoomImages/Canvas.png';
import group9 from '../assets/bedRoomImages/Group9.png';
import group8 from '../assets/bedRoomImages/Group8.png';
import car from '../assets/bedRoomImages/car.png';
import basketball from '../assets/bedRoomImages/basketball.png';
import booksCapinet from '../assets/bedRoomImages/booksCapinet.png';

const BedRoomScreen = () => {
  const [showPage18, setShowPage18] = useState(false);
  const goToPage18 = () => {
    setShowPage18(true);
  };

  if (showPage18) {
    return <Page18 goToPage18={() => setShowPage18(false)} />;
  }

  return (
    <View style={styles.container}>
      <Image source={backgroundDoodle} style={styles.background} />
      <MenuButton userMode="parents" />

      <View style={styles.headerTextContainer}>
        <Text style={styles.bedroomTitle}>Bedroom</Text>
      </View>

      <Image source={clock} style={styles.clock} />
      <TouchableOpacity onPress={goToPage18} style={styles.booksContainer}>
        <Image source={books} style={styles.books} />
      </TouchableOpacity>
      <View style={styles.rectangle}></View>
      <Image source={canvas} style={styles.canvas} />
      <Image source={group9} style={styles.group9} />
      <Image source={group8} style={styles.group8} />
      <Image source={car} style={styles.car} />
      <Image source={basketball} style={styles.ball} />
      <Image source={booksCapinet} style={styles.booksCapinet} />
    </View>
  );
};

export default BedRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  headerTextContainer: {
    position: 'absolute',
    top: '8%',
  },
  bedroomTitle: {
    fontSize: 45,
    fontWeight: '700',
  },
  rectangle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#F7D553',
    height: '28%',
  },
  booksCapinet: {
    position: 'absolute',
    right: 0,
    top: '20%',
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  clock: {
    position: 'absolute',
    top: 70,
    left: 70,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  books: {
    position: 'absolute',
    top: '25%',
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  canvas: {
    position: 'absolute',
    left: '2%',
    top: '38%',
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  group9: {
    position: 'absolute',
    top: '80%',
    left: '25%',
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  group8: {
    position: 'absolute',
    top: '90%',
    left: '50%',
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  car: {
    position: 'absolute',
    top: '75%',
    left: '40%',
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  ball: {
    position: 'absolute',
    right: '20%',
    top: '70%',
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  booksContainer: {
    position: 'absolute',
    top: '26%',
    right: '72%',
  },
});