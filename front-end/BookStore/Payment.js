import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Image, KeyboardAvoidingView, Alert, ScrollView } from 'react-native';
import { Itim_400Regular } from '@expo-google-fonts/itim';
import { useFonts } from 'expo-font';
import phyDoodleShapes from '../assets/BgImage/doodle.png';
import goBackButton from '../assets/menuImages/gobackIcon.png';
import ParentUI from '../ParentUI/ParentUI';
import AiBook from '../assets/booksImages/AIBook.png';
import ConfirmPurchaseButton from '../assets/buyButtons/ConfirmPurchaseButton.png';
import PurchaseSuccessful from '../purchaseSuccessful';
import axios from 'axios';

const Payment = () => {
  const [showParentUI, setShowParentUI] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [expiryDateError, setExpiryDateError] = useState('');
  const [cvvError, setCvvError] = useState('');
  const [nameError, setNameError] = useState('');

  const [fontsLoaded] = useFonts({
    Itim_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handleGoBack = () => {
    setShowParentUI(true);
  };

  const handleConfirmPurchase = async () => {
    let isValid = true;

   // used tio clear any previous error messages
    setCardNumberError('');
    setExpiryDateError('');
    setCvvError('');
    setNameError('');

    if (!/^\d{10}$/.test(cardNumber)) {
      setCardNumberError('Card number must be 10 digits');
      isValid = false;
    }

    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDate) {
      setExpiryDateError('Expiry date is required');
      isValid = false;
    } else if (!expiryDateRegex.test(expiryDate)) {
      setExpiryDateError('Invalid expiry date format');
      isValid = false;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      setCvvError('CVV must be 3 or 4 digits');
      isValid = false;
    }

    if (!/^[A-Za-z\s]+$/.test(name)) {
      setNameError('Name is required and cannot contain numbers');
      isValid = false;
    }

    if (!isValid) {
    
      setTimeout(() => {
        setCardNumberError('');
        setExpiryDateError('');
        setCvvError('');
        setNameError('');
      }, 5000);
      return;
    }


  try {
    const requestUrl = 'http://localhost:3000/saveDetails';
    const requestBody = {cardNumber, expiryDate, cvv, name  };

    const response = await axios.post(requestUrl, requestBody);
    console.log(response.data.message); 
    setPurchaseComplete(true);
  } catch (error) {
    Alert.alert('Error', 'Failed to process payment');
  }
}


  if (showParentUI) {
    return <ParentUI handleGoBack={() => setShowParentUI(false)} />;
  }

  if (purchaseComplete) {
    return <PurchaseSuccessful />;
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.header}>The Book Store</Text>
        <Image source={phyDoodleShapes} style={styles.backgroundImage} />
        <View style={styles.contentContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.AiBookTitle}>Artificial Intelligence for Babies</Text>
            
            <View style={styles.inputGroup}>
              <View style={styles.inputRow}>
                <Text style={styles.label}>Card Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your card number"
                  value={cardNumber}
                  onChangeText={setCardNumber}
                  keyboardType="numeric"
                />
              </View>
              {cardNumberError ? <Text style={styles.error}>{cardNumberError}</Text> : null}
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputRow}>
                <Text style={styles.label}>Expiry Date</Text>
                <TextInput
                  style={styles.input}
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChangeText={setExpiryDate}
                  keyboardType="numeric"
                />
              </View>
              {expiryDateError ? <Text style={styles.error}>{expiryDateError}</Text> : null}
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputRow}>
                <Text style={styles.label}>CVV</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your CVV"
                  value={cvv}
                  onChangeText={setCvv}
                  keyboardType="numeric"
                  secureTextEntry
                />
              </View>
              {cvvError ? <Text style={styles.error}>{cvvError}</Text> : null}
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputRow}>
                <Text style={styles.label}>Name on Card</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your card name"
                  value={name}
                  onChangeText={setName}
                />
              </View>
              {nameError ? <Text style={styles.error}>{nameError}</Text> : null}
            </View>

            <TouchableOpacity style={styles.buyButtonIcon} onPress={handleConfirmPurchase}>
              <Image source={ConfirmPurchaseButton} style={styles.ConfirmPurchaseButton} />
            </TouchableOpacity>
          </View>

          <View style={styles.bookContainer}>
            <Image source={AiBook} style={styles.AiBookImg} />
            <Text style={styles.pricetag}>$12.99</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.goBackIcon} onPress={handleGoBack}>
          <Image source={goBackButton} style={styles.goBack} />
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F6FF',
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 50,
    fontFamily: 'Itim_400Regular',
    color: '#3F3CB4',
    marginVertical: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  formContainer: {
    width: '60%',
    paddingRight: 20,
  },
  bookContainer: {
    width: '35%',
    alignItems: 'center',
    top: 50,
  },
  inputGroup: {
    marginVertical: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontFamily: 'Itim_400Regular',
    marginBottom: 5,
    flex: 1,
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 18,
    flex: 2,
  },
  AiBookTitle: {
    fontSize: 30,
    fontFamily: 'Itim_400Regular',
    color: '#ED5D5B',
    textAlign: 'center',
    marginVertical: 20,
  },
  pricetag: {
    fontSize: 30,
    fontFamily: 'Itim_400Regular',
    color: '#3D3AAF',
    marginVertical: 10,
  },
  ConfirmPurchaseButton: {
    position:'absolute',
    left: 820,
    bottom: -250,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 25,
    width: '100%',
    zIndex: -1,
  },
  goBackIcon: {
    position:'absolute',
    top:20,
    left:20
  },
  goBack: {
    width: 50,
    height: 50,
  },
  error: {
    color: 'red',
    marginLeft: 10,
  },
});

export default Payment;
