import React, { useState } from 'react'; //Add useState is crucial for PurchaseHistoryGreen
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import phyDoodleShapes from '../front-end/assets/BgImage/doodle.png'; // Import background image
import BrowseBookRed from '../front-end/assets/parentsUIImages/BrowseBook.png';
import PurchaseHistoryGreen from '../front-end/assets/parentsUIImages/PurchaseHistoryButton.png';
import TrackingYellow from '../front-end/assets/parentsUIImages/TrackingActivities.png';
import PurchaseHistory from './MenuButton';
import PurchaseHistoryText from './PurchaseHistoryText'; // Import the PurchaseHistoryText component in App.js or PurchaseHistoryText.js
import BookStore from './BookStore'; // Import the BookStore component

const ParentUI = () => {
    // Add this one that makes Purchase History button functional
    // State to toggle PurchaseHistoryText
    const [showPurchaseHistoryText, setShowPurchaseHistoryText] = useState(false); // State to toggle Purchase History Text
    const [showBookStore, setShowBookStore ] = useState(false); // State to toggle BookStore page
     
    const handleBrowseBooks = () => {
        // navigate back to the bookstore page
        setShowBookStore(true);
      };
      if (showBookStore) {
        // passing a handleBrowseBooks function to navigate back from the BookStore page
        return <BookStore handleBrowseBooks={() => setShowBookStore(false)} />;
      }
    const handlePurchaseHistory = () => {
        // Add this one too
        // Set state to display PurchaseHistoryText
        setShowPurchaseHistoryText(true);
      };
      if (showPurchaseHistoryText) {
        return <PurchaseHistoryText />;
    }

  return (
    <View style={styles.container}>
    <Image source={phyDoodleShapes} style={[styles.backgroundImage]} />
    <View style = {styles.purchasehistory}><PurchaseHistory /></View>
    
      

      <TouchableOpacity onPress={handleBrowseBooks} style={styles.purchaseButton}>
      <Image source={BrowseBookRed} style={[styles.BrowseBookRed]}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePurchaseHistory} style={styles.purchaseButton}>
      <Image source={PurchaseHistoryGreen} style={[styles.PurchaseHistoryGreen]}/>
      </TouchableOpacity>

      <TouchableOpacity>
      <Image source={TrackingYellow} style={[styles.TrackingYellow]}/>
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
  backgroundImage: 
  {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    marginBottom: -225,
  },
  BrowseBookRed:
  {
    marginRight: 30,
    top: -105,
    right: 373,
  },
  PurchaseHistoryGreen:
  {
    top: -106,
    marginRight: 30,
    marginLeft: 30,
  },
  TrackingYellow:
  {
    marginLeft: 30,
    left: 370,
    top: -256,
  },
  purchaseButton: {
    position: 'absolute',
    bottom: 150,
    marginLeft: 30,
    zIndex: 1, // Make sure the button has a higher z-index than other views
},
});

export default ParentUI;