import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Itim_400Regular } from '@expo-google-fonts/itim'; // Import custom font
import { useFonts } from 'expo-font';
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
  const [showParentUI, setShowParentUI] = useState(false); // State to toggle ParentUI
  const [showPayment, setShowPayment] = useState(false); // State to toggle Payment page

  const [fontsLoaded] = useFonts({
    Itim_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handleGoBack = () => {
    setShowParentUI(true); // Set showParentUI state to true
  };

  if (showParentUI) {
    return <ParentUI handleGoBack={() => setShowParentUI(false)} />;
  }

  if (showPayment) {
    return <Payment />;
  }

  const books = [
    {
      title: 'Artificial Intelligence for Babies',
      image: AiBook,
      description: AiBookDesc,
      price: '$12.99'
    },
    {
      title: 'Nuclear Physics for Babies',
      image: NucPhysics,
      description: nucPhyDesc,
      price: '$12.99'
    },
    // Add more books here if needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>The Book Store</Text>
      <Image source={phyDoodleShapes} style={styles.backgroundImage} resizeMode="contain" />
      <View style={styles.booksContainer}>
        {books.map((book, index) => (
          <View key={index} style={styles.bookItem}>
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Image source={book.image} style={styles.bookImg} resizeMode="contain" />
            <Image source={book.description} style={styles.bookDescImg} resizeMode="contain" />
            <Text style={styles.pricetag}>{book.price}</Text>
            <TouchableOpacity style={styles.buyButtonIcon} onPress={() => setShowPayment(true)}>
              <Image source={buyButton} style={styles.buyButton} resizeMode="contain" />
            </TouchableOpacity>
            <Image source={horiLine} style={styles.horiLine} resizeMode="contain" />
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.goBackIcon} onPress={handleGoBack}>
        <Image source={goBackButton} style={styles.goBack} resizeMode="contain" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E0F6FF',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    fontSize: 50,
    fontFamily: 'Itim_400Regular',
    color: '#3F3CB4',
    marginVertical: 20,
  },
  booksContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  bookItem: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 20,
  },
  bookTitle: {
    fontSize: 20,
    fontFamily: 'Itim_400Regular',
    color: '#ED5D5B',
    textAlign: 'center',
    marginVertical: 10,
  },
  bookImg: {
    width: 100,
    height: 150,
    marginVertical: 10,
  },
  bookDescImg: {
    width: 200,
    height: 80,
    marginVertical: 10,
  },
  pricetag: {
    fontSize: 20,
    fontFamily: 'Itim_400Regular',
    color: '#3D3AAF',
    marginVertical: 10,
  },
  buyButtonIcon: {
    marginVertical: 10,
  },
  buyButton: {
    width: 100,
    height: 40,
  },
  horiLine: {
    width: '80%',
    height: 2,
    marginVertical: 10,
  },
  goBackIcon: {
    marginVertical: 20,
  },
  goBack: {
    width: 50,
    height: 50,
  },
  backgroundImage: {
    position: 'absolute',
    top: -135,
    left: 10,
    width: '100%',
    zIndex: -1,
    marginTop: 140,
  },
});

export default BookStore;
