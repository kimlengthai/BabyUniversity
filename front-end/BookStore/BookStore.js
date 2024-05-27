import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
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

const { width } = Dimensions.get('window'); // Get the screen width

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
    <View style={styles.container}>
      <Text style={styles.header}>The Book Store</Text>
      <Image source={phyDoodleShapes} style={styles.backgroundImage} resizeMode="contain" />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true} // Show the scroll indicator to hint that it's scrollable
        contentContainerStyle={styles.scrollViewContainer}
      >
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
      </ScrollView>
      <View style={styles.scrollHint}>
        <Text style={styles.scrollHintText}>Scroll right</Text>
        <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/right-squared.png' }} style={styles.rightArrow} />
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
    padding: 10,
    position: 'relative'
  },
  header: {
    fontSize: 50,
    fontFamily: 'Itim_400Regular',
    color: '#3F3CB4',
    marginVertical: 20,
  },
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  bookItem: {
    width: width - 50, // Adjust width to fit the screen with some padding
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  bookTitle: {
    fontSize: 36, // Increased font size
    fontFamily: 'Itim_400Regular',
    color: '#ED5D5B',
    textAlign: 'center',
    marginVertical: 10,
  },
  bookImg: {
    width: 250, // Increased size
    height: 350, // Increased size
    marginVertical: 10,
  },
  bookDescImg: {
    width: 370,
    height: 100,
    marginVertical: 10,
  },

  pricetag: {
    fontSize: 34, // Increased font size
    fontFamily: 'Itim_400Regular',
    color: '#3D3AAF',
    marginVertical: 10,
  },
  buyButtonIcon: {
    marginVertical: 10,
  },
  buyButton: {
    width: 140, // Increased size
    height: 60, // Increased size
  },
  horiLine: {
    width: '80%',
    height: 2,
    marginVertical: 10,
  },
  goBackIcon: {
    marginVertical: 20,
    position: 'absolute',
    left: 70,
    bottom: 20
  },
  goBack: {
    width: 70,
    height: 70,
  },
  backgroundImage: {
    position: 'absolute',
    top: -135,
    left: 10,
    width: '100%',
    zIndex: -1,
    marginTop: 140,
  },
  scrollHint: {
    position: 'absolute',
    bottom: 50,
    right: 70, // Adjusted the position to move it to the right
    alignItems: 'center',
  },
  scrollHintText: {
    fontSize: 24,
    color: '#3F3CB4',
    marginBottom: 5,
  },
  rightArrow: {
    width: 28,
    height: 28,
  },
});

export default BookStore;
