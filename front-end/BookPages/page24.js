import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Page23 from './page23';
import ParentUI from '../ParentUI/ParentUI';
import picture from '../assets/picture.png';

const Page24 = () => {
  const [showParentUI, setShowParentUI] = useState(false);
  const [showpage23, setShowpage23 ] = useState(false);

  const handleGoBack = () =>
    {
      setShowpage23(true);
    };

  const goToParentUI = () => 
    {
      setShowParentUI(true);
    };  

    if (showpage23) {
    return <Page23 handleGoBack={() => setShowpage23(false)} />;
  }
  if (showParentUI) 
    {
      return <ParentUI goToParentUI={() => setShowParentUI(false)} />;
    }
  return (
    <View style={styles.container}>
    <Image source={picture} style={[styles.pictureImg]} />
      <Text style={styles.text}>Now you are a quantum physicist.</Text>
      <TouchableOpacity style={styles.nextButton} onPress={goToParentUI}>
      <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
      <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f5',
    position: 'relative',
  },
  pictureImg:
  {
    left: 0,
    bottom: 0,
    width: 270,
    height: 250,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    top: 50,
  },
  nextButton:
  {
    backgroundColor: '#A2C13C',
    borderRadius: '20%',
    zIndex: 1,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    bottom: -100,
    zIndex: 6,
  },
  buttonText: 
  {
    color: '#000000',
    fontSize: 40,
    /*fontFamily: 'Itim_400Regular',*/
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },
  goBackButton:
  {
    color: '#292D32',
    borderRadius: '20%',
    backgroundColor: 'green',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    bottom: -22,
    right: 190,
    zIndex: 6,
  },
  goBack:
  {
    width: 77,
    height: 77,
  },
});

export default Page24;
