// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcct6Qh1pha8c6RR-kzagDhTfkdGK83B0",
  authDomain: "react-fee8d.firebaseapp.com",
  projectId: "react-fee8d",
  storageBucket: "react-fee8d.appspot.com",
  messagingSenderId: "942389893911",
  appId: "1:942389893911:web:f124cfb1d531ae1193b552"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const provider =new GoogleAuthProvider();
export const db=getFirestore(app)