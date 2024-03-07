// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA19iQzo-UMGV0AcbsFKzQShbUZWAd-eCk",
  authDomain: "react-prep-f528b.firebaseapp.com",
  projectId: "react-prep-f528b",
  storageBucket: "react-prep-f528b.appspot.com",
  messagingSenderId: "843357406406",
  appId: "1:843357406406:web:ed5b8927840903b5a943c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);