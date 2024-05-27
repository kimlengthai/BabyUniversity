import { auth, db } from '../front-end/firebase.js';
import { getDataFromDB, saveDataToDB } from './App.js';
import { Router } from 'express';


const router = Router();


// Define a route for retreiing data from the databse. Used for verification purposes
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


// Defines validations for validating user inputs from signup 
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateName = (name) => /^[A-Za-z]+$/.test(name);
const validateDOB = (dob) => {
  const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!datePattern.test(dob)) return { valid: false, message: 'Invalid date format. Must be DD/MM/YYYY.' };
  const [day, month, year] = dob.split('/').map(Number);
  const date = new Date(year, month - 1, day);
  if (date.getDate() !== day || date.getMonth() !== month - 1 || date.getFullYear() !== year) return { valid: false, message: 'Please provide a date in valid format.' };
  return { valid: true };
};
const validateParentalPin = (pin) => /^\d{4}$/.test(pin);
const validatePassword = (password) => {
  if (!password) return 'Please enter your password.';
  if (password.length < 6) return 'Password must be at least 6 characters long.';
  
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!passwordRegex.test(password)) return 'Password must include at least one lowercase letter, one uppercase letter, one special character, and one number.';

  return null;
};

// This route validates user input from signup by invoking the tests above
// Provides error messages for users to view based on different errors
// Once successful the data is saved to the database 
router.post('/save', async (req, res) => {
  try {
    const { email, firstName, lastName, DOB, parentalPin} = req.body;
    
    const errors = {};

    if (!email) errors.email = 'Please enter your email.';
    else if (!validateEmail(email)) errors.email = 'Invalid email format.';

    if (!firstName) errors.firstName = 'Please enter your first name.';
    else if (!validateName(firstName)) errors.firstName = 'First name must only contain letters.';

    if (!lastName) errors.lastName = 'Please enter your last name.';
    else if (!validateName(lastName)) errors.lastName = 'Last name must only contain letters.';

    if (!DOB) errors.DOB = 'Please enter your date of birth.';
    else {
      const dobValidation = validateDOB(DOB);
      if (!dobValidation.valid) errors.DOB = dobValidation.message;
    }

    if (!parentalPin) errors.parentalPin = 'Please enter a four-digit pin.';
    else if (!validateParentalPin(parentalPin)) errors.parentalPin = 'Please enter a valid four-digit pin.';

    
    

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
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

// This method is used to validate the parental pin
// Since user details are saved by document details, a variable is used to retrieve 
// details from the datatbase
// If the userEmail matches the email used to log in
// the parental pin from the document is retrived for verification
router.get('/checkpin', async (req, res) => {
  try {
    const { email, pin } = req.query;
    console.log(`Received email: ${email}`);
    console.log(`Received pin: ${pin}`);
    
    if (!email || !pin) {
      return res.status(400).json({ message: 'Email and PIN are required' });
    }

    const userDetails = await db.collection('user').get();

    let userFound = false;
    userDetails.forEach(doc => {
      const userData = doc.data();

      if (userData.email) {  // Check if the document has an email field
        const emailReceived = email.toLowerCase();
        const emailFromDatabase = userData.email.toLowerCase();

        if (emailReceived === emailFromDatabase) {
          userFound = true;
          const parentalPin = userData.parentalPin;

          if (pin === parentalPin) {
            res.status(200).json({ message: 'PIN validated' });
            return;
          } else {
            res.status(400).json({ message: 'Incorrect PIN. Please try again' });
            return;
          }
        }
      }
    });

    // Error handling for the case where user details are not found
    if (!userFound) {
      console.log(`User not found in database for email: ${email}`);
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error checking PIN:', error);
    res.status(500).json({ message: 'Error checking PIN' });
  }
});

// Used to validate and save user payment details
router.post('/saveDetails', async (req, res) => {
  try {
    const { cardNumber, expiryDate, cvv, name } = req.body;

    if (!cardNumber || !expiryDate || !cvv || !name) {
      return res.status(400).json({ message: 'Please fill out all the details' });
    }


    if (!/^\d{10}$/.test(cardNumber)) {
      return res.status(400).json({ message: 'Please enter only 10 digits present on our card' });
    }

  
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDateRegex.test(expiryDate)) {
      return res.status(400).json({ message: 'Please provide a valid date' });
    }
    if (!/^\d{3,4}$/.test(cvv)) {
      return res.status(400).json({ message: 'Please type the 3 or 4 digits on the back of your card' });
    }
    if (!/^[A-Za-z\s]+$/.test(name)) {
      return res.status(400).json({ message: 'Please provide a name with characters only' });
    }
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