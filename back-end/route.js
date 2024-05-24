import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { auth, db } from '../front-end/firebase.js';
import { getDataFromDB, saveDataToDB } from './App.js';
import { Router } from 'express';
const router = Router();

// Define a route for the default
router.get('/', (req, res) => {
  res.send('Welcome to my Node.js application!');
});

// Define a route for retrieve
router.get('/retrieve', async (req, res) => {
  try {
    const data = await getDataFromDB(db);
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error('Error getting data from DB:', error);
    res.status(500).send('Error getting data from DB');
  }
});

// Define a route for save
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateName = (name) => /^[A-Za-z]+$/.test(name);
const validateDOB = (dob) => /^\d{2}\/\d{2}\/\d{4}$/.test(dob);
const validateParentalPin = (pin) => /^\d{4}$/.test(pin);

// Define a route for save
router.post('/save', async (req, res) => {
  try {
    const { email, firstName, lastName, DOB, parentalPin } = req.body;

    // Perform validations
    if (!validateEmail(email)) {
      throw new Error('Invalid email format');
    }
    if (!validateName(firstName) || !validateName(lastName)) {
      throw new Error('First name and last name must only contain letters');
    }
    if (!validateDOB(DOB)) {
      throw new Error('Invalid date of birth format. Must be in DD/MM/YYYY format');
    }
    if (!validateParentalPin(parentalPin)) {
      throw new Error('Please enter a four digit number only');
    }

    // Proceed with saving data
    const userData = { email, firstName, lastName, DOB, parentalPin };
    const docRef = await saveDataToDB(db, userData);
    console.log('Document written with ID:', docRef.id);
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving document:', error);
    res.status(500).json({ message: 'Error saving document' });
  }
});

router.get('/checkpin', async (req, res) => {
  try {
    const { email, pin } = req.query;
    console.log(`Received email: ${email}`);
    console.log(`Received pin: ${pin}`);

    // Retrieve all documents from the 'user' collection
    const snapshot = await db.collection('user').get();

    // Iterate over each document
    let userFound = false;
    snapshot.forEach(doc => {
      const userData = doc.data();
      console.log('User data retrieved:', userData);

      // Compare the email in the document with the provided email
      if (userData.email === email) {
        userFound = true;
        const parentalPin = userData.parentalPin;

        // Compare the provided PIN with the parental PIN
        if (pin === parentalPin) {
          res.status(200).json({ message: 'PIN verified successfully' });
          return;
        } else {
          res.status(400).json({ message: 'Incorrect PIN' });
          return;
        }
      }
    });

    // If no matching email is found
    if (!userFound) {
      console.log(`User not found in database for email: ${email}`);
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error checking PIN:', error);
    res.status(500).json({ message: 'Error checking PIN' });
  }
});

router.post('/saveDetails', async (req, res) => {
  try {
    const { cardNumber, expiryDate, cvv, name } = req.body;

    // Basic validation
    if (!cardNumber || !expiryDate || !cvv || !name) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Expiry date validation
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDateRegex.test(expiryDate)) {
      return res.status(400).json({ message: 'Invalid expiry date format' });
    }

    // CVV validation
    if (!/^[0-9]{3,4}$/.test(cvv)) {
      return res.status(400).json({ message: 'Invalid CVV' });
    }

    // Name validation
    if (!/^[A-Za-z\s]+$/.test(name)) {
      return res.status(400).json({ message: 'Invalid name' });
    }

    // Save to database
    const paymentData = { cardNumber, expiryDate, cvv, name };
    const docRef = await saveDataToDB(db, paymentData);
    console.log('Document written with ID:', docRef.id);
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving document:', error);
    res.status(500).json({ message: 'Error saving document' });
  }
});




  
  export default router;