import React, { useState } from 'react';
import Page0 from '../page0-5/page0';


import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Button, Image } from 'react-native';

import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

// const image = <Image source={require('./bedroombackground.png')} />

const BedRoomScreen = () => {
  const navigation = useNavigation();
  /* click book's image will go to page 18 */
const [showPage0, setShowPage0] = useState(false);
const goToPage0 = () =>
  {
    setShowPage0(true);
  };
  if (showPage0)
    {
      return <Page0 goToPage0 = {() => setShowPage0(false)} />;
    }
  return(
    <View style = {styles.container}>
     {/* Background */}  
      <Image 
        source={require('../assets/bedRoomImages/background_doodle.png')} 
        style={styles.background} 
      />
       {/* header text title */}  
      <View style = {styles.headerTextContainer}>
        <Text style = {styles.bedroomTitle}>Bedroom</Text>
      </View>
      
      {/* Clock */}  
      <Image 
        source={require('../assets/bedRoomImages/clock.png')} 
        style={styles.clock} 
      />
      {/* books */}
      <TouchableOpacity onPress={goToPage0} style={styles.booksContainer}>
      <Image 
        source={require('../assets/bedRoomImages/books.png')} 
        style={styles.books}
      />
      </TouchableOpacity>  
      
     
      
      {/* rectangle */} 
      <View style = {styles.rectangle}></View>

       {/* canvas */}  
       <Image 
        source={require('../assets/bedRoomImages/Canvas.png')} 
        style={styles.canvas} 
      />

      {/* group 9 */}  
      <Image 
        source={require('../assets/bedRoomImages/Group9.png')} 
        style={styles.group9} 
      />

      {/* group 8 */}  
      <Image 
        source={require('../assets/bedRoomImages/Group8.png')} 
        style={styles.group8} 
      />

      {/* car */}  
      <Image 
        source={require('../assets/bedRoomImages/car.png')} 
        style={styles.car} 
      />

      {/* ball */}  
      <Image 
        source={require('../assets/bedRoomImages/basketball.png')} 
        style={styles.ball} 
      />
      {/* books capinet */}
      <Image 
        source={require('../assets/bedRoomImages/booksCapinet.png')} 
        style={styles.booksCapinet} 
      />


    </View>
    
  )
};
export default BedRoomScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,     
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center'

    },
    background: {
      position: 'absolute',
      top: 0,
      resizeMode: 'contain',
      backgroundColor: '#D8EEF7' /*add bg colour*/
    },
    headerTextContainer: {
      position: 'absolute',
      top: '8%'
      
    },
    bedroomTitle: {
     fontSize: 45,
     fontWeight: '700'

    },
    rectangle: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#F7D553',
      height: "28%",

    },
    booksCapinet: {
      position: 'absolute',
      right: 0,
      top: '20'

    },
    clock: {
      position: 'absolute',
      top: 70,
      left: 70
    },
    books: {
      position: 'absolute',
      top: '25%'
    },
    canvas: {
      position: 'absolute',
      left: '2%',
      top: '38%'
    },
    group9: {
      position: 'absolute',
      top: '80%',
      left: '25%'
    },
    group8: {
      position: 'absolute',
      top: '90%',
      left: '50%'
    },
    car: {
      position: 'absolute',
      top: '75%',
      left: '40%'
    },
    ball: {
      position: 'absolute',
      right: '20%',
      top: '70%'
    },
    /* Add a touching screen for book's image */
    booksContainer:
    {
      position: 'absolute',
      top: '26%',
      right: '72%'
    }
   
  });