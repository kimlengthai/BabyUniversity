import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Itim_400Regular } from '@expo-google-fonts/itim'; // Import custom font
import { useFonts } from "expo-font";
import phyDoodleShapes from '../front-end/assets/BgImage/doodle.png'; // Import background image
import goBackButton from '../front-end/assets/menuImages/gobackIcon.png'; //
import PurchaseHistory from '../front-end/purchaseHistory'; // Import the Purchase History component
import horiLine from '../front-end/assets/img/Line.png';
import tickButton from '../front-end/assets/paymentButtons/Tick.png';
import actualTickButton from '../front-end/assets/paymentButtons/actualTick.png';
import BackToBookStoreButton from '../front-end/assets/paymentButtons/BackToBookStoreButton.png';
import Payment from '../front-end/BookStore/Payment';

const PurchaseSuccessful = () => {
  //Have to place showParentUI before fontsLoaded for issues relating to using the Hook
  const [showBoughtHistory, setShowboughtHistory] = useState(false); // It should go back to Purchase History
  const [showPayment, setShowPayment] = useState(false); // State to toggle Payment page

  const [fontsLoaded] = useFonts({
    Itim_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handleGoBack = () => {
    // Handle onPress event for goBackIcon
    // navigate back to the Purchase History
    setShowboughtHistory(true); // Set showBoughtHistory state to true
  };

  //if showBoughtHistory is true
  //return handlGoeBack
  if (showBoughtHistory) {
    // passing a handleGoBack function to toggle the showBoughtHistory state
    return <PurchaseHistory/>;
  }

  // show Payment page when clicking buy button on Bookstore page
  if (showPayment) {
    return <Payment />;
  }

  return (
    <View style={styles.container}>
    <Image source={tickButton} style={[styles.tickButton]}></Image>
    <Image source={actualTickButton} style={[styles.actualTickButton]}></Image>

      <Text style={styles.header}>Your Purchase was Successful</Text>
      <View>
      <Image source={phyDoodleShapes} style={[styles.backgroundImage]} />
      <Image source={horiLine} style={[styles.horiLine]} />
      </View>

      <View style={styles.bookContainer}>
      <Text style={styles.bookName}>Book Name: Artificial Intelligence</Text>
      <Text style={styles.transacNumber}>Transaction Number: 3445 8562</Text>
      </View>

      <View>
      <TouchableOpacity style={styles.BackToBookStoreButtonIcon} onPress={() => setShowPayment(true)}>
      <Image source={BackToBookStoreButton} style={[styles.BackToBookStoreButton]} />
      </TouchableOpacity>
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
  actualTickButton:
  {
    width: 53.28,
    height: 44.68,
    top: 275,
    zIndex: 2,
  },
  tickButton:
  {
    width: 122,
    height: 113,
    top: 355,
    zIndex: 1,
  },
  header:
  {
    fontSize: 40,
    fontFamily: "Itim_400Regular",
    color: '#3F3CB4',
    top: 395,
  },
  backgroundImage: 
  {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    marginTop: 0,
    marginBottom: 20,
  },
  horiLine:
  {
    right: -55,
    bottom: 360,
  },
  bookContainer:
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '76%',
  },
  bookName:
  {
    fontSize: 30,
    fontFamily: "Itim_400Regular",
    color: '#898A8D',
    bottom: 280,
  },
  transacNumber:
  {
    fontSize: 30,
    fontFamily: "Itim_400Regular",
    color: '#898A8D',
    bottom: 280,
  },
  BackToBookStoreButton:
  {
    bottom: 185,
    left: 0,
  },
  BackToBookStoreButtonIcon:
  {

  },
  goBackIcon:
  {
    color: '#292D32',
    backgroundColor: 'transparent',
    bottom: 910,
    right: 535,
    zIndex: 1,
  },
  goBack:
  {
    width: 77,
    height: 77,
  },
});

export default PurchaseSuccessful;