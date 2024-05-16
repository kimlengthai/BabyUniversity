import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Itim_400Regular } from '@expo-google-fonts/itim'; // Import custom font
import { useFonts } from "expo-font";
import phyDoodleShapes from '../front-end/assets/BgImage/doodle.png'; // Import background image
import goBackButton from '../front-end/assets/menuImages/gobackIcon.png'; //
import ParentUI from './ParentUI'; // Import the ParentUI component
import AiBook from '../front-end/assets/booksImages/AIBook.png'; // Import AI for Babies Book
import NucPhysics from '../front-end/assets/booksImages/nuclearPhysicsBook.png'; // Import Nuclear Physics for Babies Book
import AiBookDesc from '../front-end/assets/booksDesc/AIBookDesc.png'; // Import AI Book description
import nucPhyDesc from '../front-end/assets/booksDesc/NuclearPhysicsBookDesc.png'; // Import Nuclear Physics Book description
import horiLine from '../front-end/assets/img/Line.png';
import buyButton from '../front-end/assets/buyButtons/BuyButton.png';
import Payment from './Payment';

const BookStore = () => {
  //Have to place showParentUI before fontsLoaded for issues relating to using the Hook
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
    // navigate back to the prevous page
    setShowParentUI(true); // Set showParentUI state to true
  };

  //if showParentUI is true
  //return handlGoeBack
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
      <Image source={phyDoodleShapes} style={[styles.backgroundImage]} />
      <Text style={styles.AiBookTitle}>Artificial Intelligence for Babies</Text>
      <Image source={AiBook} style={[styles.AiBookImg]} />
      <Image source={AiBookDesc} style={[styles.AiBookDescImg]} />
      <Text style={styles.pricetag}>$12.99</Text>
      <TouchableOpacity style={styles.buyButtonIcon} onPress={() => setShowPayment(true)}>
      <Image source={buyButton} style={[styles.buyButton]} />
      </TouchableOpacity>
      <Image source={horiLine} style={[styles.horiLine]} />
      </View>

      <View>
      <Text style={styles.NPBookTitle}>Nuclear Physics for Babies</Text>
      <Image source={NucPhysics} style={[styles.NucPhysicsImg]} />
      <Image source={nucPhyDesc} style={[styles.NuclearPhysicsBookDesc]} />
      </View>

      <TouchableOpacity style={styles.goBackIcon} onPress={handleGoBack}>
        <Image source={goBackButton} style={styles.goBack}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#E0F6FF',
    alignItems: "center",
    justifyContent: "center",
  },
  header:
  {
    fontSize: 50,
    fontFamily: "Itim_400Regular",
    color: '#3F3CB4',
    top: 265,
  },
  AiBookTitle:
  {
    fontSize: 40,
    fontFamily: "Itim_400Regular",
    color: '#ED5D5B',
    bottom: 0,
    left: 100,
    width: 550,
    height: 48,
  },
  AiBookImg:
  {
    left: 120,
    bottom: -20,
  },
  AiBookDescImg:
  {
    top: -220,
    left: 410,
  },
  pricetag:
  {
    fontSize: 30,
    fontFamily: "Itim_400Regular",
    color: '#3D3AAF',
    width: 84,
    height: 36,
    bottom: 170,
    left: 785,
  },
  buyButton:
  {
    bottom: 210,
    left: 920,
  },
  horiLine:
  {
    right: -50,
    bottom: 138,
  },
  NPBookTitle:
  {
    fontSize: 40,
    fontFamily: "Itim_400Regular",
    color: '#ED5D5B',
    bottom: 130,
    right: 175,
    width: 455,
    height: 48,
  },
  NucPhysicsImg:
  {
    right: 155,
    bottom: 85,
  },
  NuclearPhysicsBookDesc:
  {
    left: 135,
    bottom: 263,
  },
  browseButton:
  {
    backgroundColor: '#A2C13C',
    borderRadius: '20%',
    marginTop: 295,
    zIndex: 1,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
  },
  buttonText: 
  {
    color: '#000000',
    fontSize: 40,
    fontFamily: 'Itim_400Regular',
    textAlign: 'center',
    paddingVertical: 25,
    paddingHorizontal: 45,
  },  
  backgroundImage: 
  {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    marginTop: 160,
    marginBottom: -710,
  },
  goBackIcon:
  {
    color: '#292D32',
    backgroundColor: 'transparent',
    bottom: 960,
    right: 535,
    zIndex: 1,
  },
  goBack:
  {
    width: 77,
    height: 77,
  },
});

export default BookStore;