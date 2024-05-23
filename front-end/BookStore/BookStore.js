import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Itim_400Regular } from '@expo-google-fonts/itim'; // Import custom font
import { useFonts } from "expo-font";
import phyDoodleShapes from '../assets/BgImage/doodle.png'; // Import background image
import goBackButton from '../assets/menuImages/gobackIcon.png';
import ParentUI from '../ParentUI/ParentUI'; // Import the ParentUI component
import AiBook from '../assets/booksImages/AIBook.png'; // Import AI for Babies Book
import NucPhysics from '../assets/booksImages/nuclearPhysicsBook.png'; // Import Nuclear Physics for Babies Book
import AiBookDesc from '../assets/booksDesc/AIBookDesc.png'; // Import AI Book description
import nucPhyDesc from '../assets/booksDesc/NuclearPhysicsBookDesc.png'; // Import Nuclear Physics Book description
import horiLine from '../assets/img/Line.png';
import buyButton from '../assets/buyButtons/BuyButton.png';
import Payment from './Payment';

const BookStore = () => {
  // Have to place showParentUI before fontsLoaded for issues relating to using the Hook
  const [showParentUI, setShowParentUI] = useState(false); // State to toggle ParentUI
  const [showPayment, setShowPayment] = useState(false); // State to toggle Payment page

  const [fontsLoaded] = useFonts({
    Itim_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handleGoBack = () => {
    // Handle onPress event for goBackIcon
    // navigate back to the previous page
    setShowParentUI(true); // Set showParentUI state to true
  };

  // if showParentUI is true
  // return handleGoBack
  if (showParentUI) {
    // passing a handleGoBack function to toggle the showParentUI state
    return <ParentUI handleGoBack={() => setShowParentUI(false)} />;
  }

  // show Payment page when clicking buy button on Bookstore page
  if (showPayment) {
    return <Payment />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The Book Store</Text>
      
      <View>
        <Image source={phyDoodleShapes} style={styles.backgroundImage} resizeMode="contain" />
        <Text style={styles.AiBookTitle}>Artificial Intelligence for Babies</Text>
        <Image source={AiBook} style={styles.AiBookImg} resizeMode="contain" />
        <Image source={AiBookDesc} style={styles.AiBookDescImg} resizeMode="contain" />
        <Text style={styles.pricetag}>$12.99</Text>
        <TouchableOpacity style={styles.buyButtonIcon} onPress={() => setShowPayment(true)}>
          <Image source={buyButton} style={styles.buyButton} resizeMode="contain" />
        </TouchableOpacity>
        <Image source={horiLine} style={styles.horiLine} resizeMode="contain" />
      </View>

      <View>
        <Text style={styles.NPBookTitle}>Nuclear Physics for Babies</Text>
        <Image source={NucPhysics} style={styles.NucPhysicsImg} resizeMode="contain" />
        <Image source={nucPhyDesc} style={styles.NuclearPhysicsBookDesc} resizeMode="contain" />
      </View>

      <TouchableOpacity style={styles.goBackIcon} onPress={handleGoBack}>
        <Image source={goBackButton} style={styles.goBack} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F6FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  header: {
    fontSize: 50,
    fontFamily: 'Itim_400Regular',
    color: '#3F3CB4',
    marginVertical: 20,
  },
  AiBookTitle: {
    fontSize: 30,
    fontFamily: 'Itim_400Regular',
    color: '#ED5D5B',
    textAlign: 'center',
    marginVertical: 10,
  },
  AiBookImg: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  AiBookDescImg: {
    width: 300,
    height: 80,
    marginVertical: 10,
  },
  pricetag: {
    fontSize: 20,
    fontFamily: 'Itim_400Regular',
    color: '#3D3AAF',
    marginVertical: 10,
  },
  buyButton: {
    width: 100,
    height: 40,
    marginVertical: 10,
  },
  horiLine: {
    width: 300,
    height: 2,
    marginVertical: 10,
  },
  NPBookTitle: {
    fontSize: 30,
    fontFamily: 'Itim_400Regular',
    color: '#ED5D5B',
    textAlign: 'center',
    marginVertical: 10,
  },
  NucPhysicsImg: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  NuclearPhysicsBookDesc: {
    width: 300,
    height: 80,
    marginVertical: 10,
  },
  goBackIcon: {
    marginVertical: 10,
  },
  goBack: {
    width: 50,
    height: 50,
  },
});

export default BookStore;
