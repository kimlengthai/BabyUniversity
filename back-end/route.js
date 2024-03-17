import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { firebaseConfig} from './connection.js';
import { getDataFromDB, saveDataToDB } from './App.js';
import { Router } from 'express';

const db = firebase.firestore();

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
      const data = await saveDataToDB(db);
      console.log(data);
      res.send(data); // Send the retrieved data to the browser
    } catch (error) {
      console.error('Error gettting data from DB:', error);
      res.status(500).send('Error gettting data from DB');
    }
  });

  export default router;
  