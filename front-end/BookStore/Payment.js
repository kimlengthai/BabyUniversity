import React, { useState } from 'react';
import { View, TouchableOpacity, Text,TextInput, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { Itim_400Regular } from '@expo-google-fonts/itim';
import { useFonts } from "expo-font";
import phyDoodleShapes from '../assets/BgImage/doodle.png'; // Import background image
import goBackButton from '../assets/menuImages/gobackIcon.png';
import ParentUI from '../ParentUI/ParentUI'; // Import the ParentUI component
import AiBook from '../assets/booksImages/AIBook.png'; // Import AI for Babies Book
import ConfirmPurchaseButton from '../assets/buyButtons/ConfirmPurchaseButton.png';
import PurchaseSuccessful from '../purchaseSuccessful';

const Payment = () => {
  //Have to place showParentUI before fontsLoaded for some Hook reasons
  const [showParentUI, setShowParentUI] = useState(false); // State to toggle ParentUI
  const [purchaseComplete, setPurchaseComplete] = useState(false);
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

  const handleConfirmPurchase = () => {
    setPurchaseComplete(true); // Set purchaseComplete state to true
  };

  //if showParentUI is true
  //return handlGoeBack
  if (showParentUI) {
    // passing a handleGoBack function to toggle the showParentUI state
    return <ParentUI handleGoBack={() => setShowParentUI(false)} />;
  }

  if (purchaseComplete)
    {
      return <PurchaseSuccessful/>
    }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <Text style={styles.header}>The Book Store</Text>
      <View>
      <Image source={phyDoodleShapes} style={[styles.backgroundImage]} />
      <Text style={styles.AiBookTitle}>Artificial Intelligence for Babies</Text>
      <View style = {styles.paymentContainer}>

      <View style={styles.cardContainer}>
      <Text style={styles.label}>Card Number: </Text>
      <TextInput
                        style={styles.input}
                        placeholder="Enter your card number"
                    />
      </View>

      <View style={styles.numberContainer}>
      <Text style={styles.label}>Expiry Date:</Text>
      <TextInput
                        style={styles.inputDate}
                        placeholder="Enter your expiry date"
                    />
      <Text style={styles.labelCVV}>CVV:</Text>
      <TextInput
                        style={styles.inputCVV}
                        placeholder="Enter your CVV"
                    />
      </View>

      <View style={styles.nameContainer}>
      <Text style={styles.label}>Name on Card:</Text>
      <TextInput
                        style={styles.input}
                        placeholder="Enter your card name"
                    />
      </View>

      </View>
      <Image source={AiBook} style={[styles.AiBookImg]} />
      <Text style={styles.pricetag}>$12.99</Text>

      <TouchableOpacity style={styles.buyButtonIcon} onPress={handleConfirmPurchase}>
      <Image source={ConfirmPurchaseButton} style={[styles.ConfirmPurchaseButton]} />
      </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.goBackIcon} onPress={handleGoBack}>
        <Image source={goBackButton} style={styles.goBack}/>
      </TouchableOpacity>
      
    </KeyboardAvoidingView>
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
  paymentContainer:
  {
    width: '50%',
  },
  cardContainer:
  {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    left: 60,
    top: -30,
  },
  numberContainer:
  {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    left: 60,
    top: -10,
  },
  nameContainer:
  {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    left: 60,
    top: -10,
  },
  label: {
    marginRight: 250,
    bottom: 20,
    fontSize: 30,
    fontFamily: "Itim_400Regular",
  },
  labelCVV: 
  {
    marginRight: 20,
    right: 123,
    fontSize: 30,
    fontFamily: "Itim_400Regular",
  },
  input:
  {
    backgroundColor: '#FFFFFF',
    padding: 20,
    width: 525,
    height: 43,
    borderRadius: 14,
    right: 230,
    bottom: 15,
  },
  inputDate:
  {
    backgroundColor: '#FFFFFF',
    padding: 20,
    right: 190,
    borderRadius: 14,
    width: 183,
    height: 43,
    bottom: 5,
  },
  inputCVV:
  {
    backgroundColor: '#FFFFFF',
    width: 183,
    height: 43,
    borderRadius: 14,
    padding: 20,
    right: 120,
  },
  header:
  {
    fontSize: 50,
    fontFamily: "Itim_400Regular",
    color: '#3F3CB4',
    top: 125,
    left: 5,
  },
  AiBookTitle:
  {
    fontSize: 40,
    fontFamily: "Itim_400Regular",
    color: '#ED5D5B',
    bottom: 45,
    left: 60,
    width: 550,
    height: 48,
  },
  AiBookImg:
  {
    left: 865,
    bottom: 275,
    width: 254,
    height: 254,
  },
  pricetag:
  {
    fontSize: 30,
    fontFamily: "Itim_400Regular",
    color: '#3D3AAF',
    width: 84,
    height: 36,
    bottom: 260,
    left: 950,
  },
  ConfirmPurchaseButton:
  {
    bottom: 70,
    left: 840,
  },
  backgroundImage: 
  {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    marginTop: 10,
    marginBottom: -600,
  },
  goBackIcon:
  {
    color: '#292D32',
    backgroundColor: 'transparent',
    bottom: 800,
    right: 535,
    zIndex: 1,
  },
  goBack:
  {
    width: 77,
    height: 77,
  },
});

export default Payment;