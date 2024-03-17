import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAInq4Yu1c0RFlrmpSOR2SEAw9qYop1lCc",
  authDomain: "sds-babyuniversity.firebaseapp.com",
  projectId: "sds-babyuniversity",
  storageBucket: "sds-babyuniversity.appspot.com",
  messagingSenderId: "296729959886",
  appId: "1:296729959886:web:8a2d56f4d00497e96d1f9f",
  measurementId: "G-7DXT0GZCZ7"
};  

export {firebaseConfig};
  
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}





