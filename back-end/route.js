import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { firebaseConfig} from './connection.js';
import { getDataFromDB, saveDataToDB } from './App.js';
import { Router } from 'express';



const db = firebase.firestore();

const router = Router();

firebase.initializeApp(firebaseConfig);


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
      const { email, password, firstName, lastName, dob } = req.body;
  
      // Perform validations
      if (!validateEmail(email)) {
        throw new Error('Invalid email format');
      }
  
      if (!validateName(firstName) || !validateName(lastName)) {
        throw new Error('First name and last name must only contain letters');
      }
  
      if (!validateDOB(dob)) {
        throw new Error('Invalid date of birth format. Must be in DD/MM/YYYY format');
      }
  
      // Proceed with saving data
      const userData = { email, password, firstName, lastName, dob };
      const docRef = await saveDataToDB(db, userData);
      console.log('Document written with ID:', docRef.id);
      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error saving document:', error);
      res.status(500).json({ message: 'Error saving document' });
    }
  });
  export default router;