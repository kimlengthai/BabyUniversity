// import * as firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFTiMrSAqmP_73arZ7pNxo0ruGGYNlPdw",
  authDomain: "baby-university-19691.firebaseapp.com",
  projectId: "baby-university-19691",
  storageBucket: "baby-university-19691.appspot.com",
  messagingSenderId: "406813890694",
  appId: "1:406813890694:web:4bf6d73f00037713f91907"
};

// Initialize Firebase
//Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };


// const auth = firebase.auth();
// export { auth };



