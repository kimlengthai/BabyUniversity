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

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateName = (name) => /^[A-Za-z]+$/.test(name);
const validateDOB = (dob) => /^\d{2}\/\d{2}\/\d{4}$/.test(dob);
const validateParentalPin = (pin) => /^\d{4}$/.test(pin);

// Define a route for save
router.post('/save', async (req, res) => {
  try {
    const { email, firstName, lastName, DOB, parentalPin } = req.body;
    if (!email || !firstName || !lastName || !DOB || !parentalPin) {
      throw new Error('Please fill in all fields.');
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

// Retry logic for transient errors
const MAX_RETRIES = 3;

const withRetry = async (fn) => {
  let attempt = 0;
  while (attempt < MAX_RETRIES) {
    try {
      return await fn();
    } catch (error) {
      attempt++;
      if (attempt >= MAX_RETRIES || error.code !== 'UNAVAILABLE') {
        throw error;
      }
      console.log(`Retrying Firestore operation... (${attempt}/${MAX_RETRIES})`);
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt)); // Exponential backoff
    }
  }
};

router.get('/checkpin', async (req, res) => {
  try {
    const { email, pin } = req.query;
    console.log(`Received email: ${email}`);
    console.log(`Received pin: ${pin}`);

    // Check if email and pin are provided
    if (!email || !pin) {
      return res.status(400).json({ message: 'Email and pin are required' });
    }

    // Convert email to lowercase for case-insensitive comparison
    const normalizedEmail = email.toLowerCase();

    const snapshot = await withRetry(() => db.collection('user').get());

    let userFound = false;
    for (const doc of snapshot.docs) {
      const userData = doc.data();
      // Compare the email in the document with the provided email (both in lowercase)
      const emailFetchedFromData = userData.email.toLowerCase();
      console.log(emailFetchedFromData);
      if (emailFetchedFromData === normalizedEmail) {
        userFound = true;
        console.log("user found with this email: " + userData.email);

        const parentalPin = userData.parentalPin;
        if (pin === parentalPin) {
          res.status(200).json({ message: 'PIN verified successfully' });
          return;
        } else {
          res.status(400).json({ message: 'Incorrect PIN' });
          return;
        }
      }
    }

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

    // Card number validation
    if (!/^\d{10}$/.test(cardNumber)) {
      return res.status(400).json({ message: 'Invalid card number format' });
    }

    // Expiry date validation
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDateRegex.test(expiryDate)) {
      return res.status(400).json({ message: 'Invalid expiry date format' });
    }

    // CVV validation
    if (!/^\d{3,4}$/.test(cvv)) {
      return res.status(400).json({ message: 'Invalid CVV' });
    }

    // Name validation
    if (!/^[A-Za-z\s]+$/.test(name)) {
      return res.status(400).json({ message: 'Invalid name' });
    }

    // Save to database (replace this with your actual database saving logic)
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