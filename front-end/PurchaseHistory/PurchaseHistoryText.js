/* This is the Purchase History Page */
/* Kimleng's part */
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Itim_400Regular } from '@expo-google-fonts/itim'; // Import custom font
import { useFonts } from "expo-font";
import phyDoodleShapes from '../assets/BgImage/doodle.png'; // Import background image
import goBackButton from '../assets/menuImages/gobackIcon.png';
import PurchaseHistory from '../MenuButton'; // Import the MenuButton component
import ParentUI from '../ParentUI/ParentUI'; // Import the ParentUI component
import BookStore from '../BookStore/BookStore'; // Import the BookStore component

const PurchaseHistoryText = () => {
  //Have to place showParentUI before fontsLoaded for Hooks
  const [showParentUI, setShowParentUI] = useState(false); // State to toggle ParentUI
  const [showBookStore, setShowBookStore ] = useState(false); // State to toggle Bookstore
  const [fontsLoaded] = useFonts({
    Itim_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  //Move this before handleBrowseBooks
  const handleGoBack = () => {
    // Handle onPress event for goBackIcon
    // navigate back to the prevous page (ParentUI page)
    setShowParentUI(true); // Set showParentUI state to true
    setShowBookStore(false); // Set showBookStore state to false
  };

  const handleBrowseBooks = () =>
  {
    // Handle onPress event for buttonText
    // navigate back to the bookstore page
    setShowBookStore(true);
  };
  if (showBookStore) {
    // passing a handleGoBack function to toggle the showParentUI state
    return <BookStore handleBrowseBooks={() => setShowBookStore(false)} />;
  }

  //if showParentUI is true
  //return handlGoeBack
  if (showParentUI) {
    // passing a handleGoBack function to toggle the showParentUI state
    return <ParentUI handleGoBack={() => setShowParentUI(false)} />;
  }

  return (
    <View style={styles.container}>
    <View style = {styles.purchasehistory}><PurchaseHistory /></View>
    
      <Text style={styles.header}>Purchase History</Text>
      <Text style={styles.text}>You have no purchased books at the moment</Text>

      <TouchableOpacity style={styles.browseButton} onPress={handleBrowseBooks}>
      <Text style={styles.buttonText}>Browse Books</Text>
      </TouchableOpacity>
      <Image source={phyDoodleShapes} style={[styles.backgroundImage]} />

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
  purchasehistory:
  {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  header:
  {
    fontSize: 50,
    fontFamily: "Itim_400Regular",
    color: '#3F3CB4',
    top: 66,
  },
  text: 
  {
    fontSize: 40,
    fontFamily: "Itim_400Regular",
    color: '#898A8D',
    top: 227,
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
    marginTop: -500,
    marginBottom: -90,
  },
  goBackIcon:
  {
    color: '#292D32',
    backgroundColor: 'transparent',
    bottom: 10,
    right: 545,
    zIndex: 1,
  },
  goBack:
  {
    width: 77,
    height: 77,
  },
});

export default PurchaseHistoryText;