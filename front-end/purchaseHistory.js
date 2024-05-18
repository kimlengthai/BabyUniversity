/* This is the Purchase History Book Page */
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Itim_400Regular } from '@expo-google-fonts/itim'; // Import custom font
import { useFonts } from "expo-font";
import phyDoodleShapes from '../front-end/assets/BgImage/doodle.png'; // Import background image
import PurchaseHistory from './MenuButton'; // Import the MenuButton component

import AiBook from '../front-end/assets/booksImages/AIBook.png'; // Import AI for Babies Book

const PurchaseHistoryBook = () => {
  //Have to place showParentUI before fontsLoaded for Hooks
  const [fontsLoaded] = useFonts({
    Itim_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
    <View style = {styles.purchasehistory}><PurchaseHistory /></View>
      <Text style={styles.header}>Purchase History</Text>

      <View>
      <Image source={phyDoodleShapes} style={[styles.backgroundImage]} />
      <Text style={styles.AiBookTitle}>Artificial Intelligence for Babies</Text>
      <Image source={AiBook} style={[styles.AiBookImg]} />

      <View style={styles.detailContainer}>
      <Text style={styles.purchaseDate}>Purchase Date: <Text style={styles.date}> 29 May 2024</Text></Text>
      <Text style={styles.cardNumber}>Card Number: <Text style={styles.number}> **** **** *** 2453</Text></Text>
      <Text style={styles.transactionID}>Transaction ID: <Text style={styles.id}> 5566 2453</Text></Text>
      </View>

      </View>
      <Image source={phyDoodleShapes} style={[styles.backgroundImage]} />

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
  detailContainer:
  {
    bottom: 510,
    left: 400,
  },
  purchaseDate:
  {
    fontSize: 30,
    fontFamily: "Itim_400Regular",
    color: '#3F3CB4',
    marginBottom: 10,
  },
  date:
  {
    fontSize: 24,
    fontFamily: "Itim_400Regular",
    color: '#898A8D',
    marginBottom: 10,
  },
  cardNumber:
  {
    fontSize: 30,
    fontFamily: "Itim_400Regular",
    color: '#3F3CB4',
    marginBottom: 10,
  },
  number:
  {
    fontSize: 24,
    fontFamily: "Itim_400Regular",
    color: '#898A8D',
    marginBottom: 10,
  },
  transactionID:
  {
    fontSize: 30,
    fontFamily: "Itim_400Regular",
    color: '#3F3CB4',
    marginBottom: 10,
  },
  id:
  {
    fontSize: 24,
    fontFamily: "Itim_400Regular",
    color: '#898A8D',
    marginBottom: 10,
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
  AiBookTitle:
  {
    fontSize: 40,
    fontFamily: "Itim_400Regular",
    color: '#ED5D5B',
    bottom: 285,
    left: 70,
    width: 550,
    height: 48,
  },
  AiBookImg:
  {
    left: 100,
    bottom: 255,
  },
  backgroundImage: 
  {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    marginTop: -50,
    marginBottom: -370,
  },
});

export default PurchaseHistoryBook;