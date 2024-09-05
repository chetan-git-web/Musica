// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPIn4dWr_CEI5hoT-E3vTo_CeAmtuKGg4",
  authDomain: "musica-ccd7e.firebaseapp.com",
  projectId: "musica-ccd7e",
  storageBucket: "musica-ccd7e.appspot.com",
  messagingSenderId: "378449132612",
  appId: "1:378449132612:web:bee13387efb9f959f1d011",
  measurementId: "G-P5V49CZ50S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);