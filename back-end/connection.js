// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

// // Initialize Firebase
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAInq4Yu1c0RFlrmpSOR2SEAw9qYop1lCc",
//   authDomain: "sds-babyuniversity.firebaseapp.com",
//   projectId: "sds-babyuniversity",
//   storageBucket: "sds-babyuniversity.appspot.com",
//   messagingSenderId: "296729959886",
//   appId: "1:296729959886:web:8a2d56f4d00497e96d1f9f",
//   measurementId: "G-7DXT0GZCZ7"
// };  

// export {firebaseConfig};
  
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// Ali's firebase configuration


// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig)
}else{
  app = firebase.app()
}


const auth = firebase.auth();
export { auth };



