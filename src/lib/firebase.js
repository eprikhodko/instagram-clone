// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// import {seedDatabase} from "../seed"

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCbefhloDcUR7EZ2pTNuxEBeQC8KxVpi6c",
    authDomain: "instagram-clone-f52bd.firebaseapp.com",
    projectId: "instagram-clone-f52bd",
    storageBucket: "instagram-clone-f52bd.appspot.com",
    messagingSenderId: "443757525721",
    appId: "1:443757525721:web:aeedfabafaeee00305dcc8"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// try another way:

// const firebase = firebase.initializeApp(firebaseConfig)

const {FieldValue} = firebase.firestore

// seedDatabase(firebase)

export {firebase, FieldValue};