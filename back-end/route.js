import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { auth,db} from '../front-end/firebase.js';
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
    const data = await getDataFromDB(db); // Await the result of getDataFromDB()
    console.log(data);
    res.send(data); // Send the retrieved data to the browser
  } catch (error) {
    console.error('Error gettting data from DB:', error);
    res.status(500).send('Error gettting data from DB');
  }
});

// Define a route for save 
router.post('/save', async (req, res) => {
  try {
    const { email, password, firstName, lastName, DOB, parentalPin } = req.body;

    // Perform validations
    if (!email || !password || !firstName || !lastName || !DOB || !parentalPin) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Proceed with saving data
    const userData = { email, password, firstName, lastName, DOB, parentalPin };
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


  
  export default router;