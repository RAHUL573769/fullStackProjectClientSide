// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBCc52OLIyvBTwvViCs7966ZhRD-UPHxk",
  authDomain: "fullstackdoctor-sportal.firebaseapp.com",
  projectId: "fullstackdoctor-sportal",
  storageBucket: "fullstackdoctor-sportal.appspot.com",
  messagingSenderId: "450876358246",
  appId: "1:450876358246:web:80e22cc27da655bdc777a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
