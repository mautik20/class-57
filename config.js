import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCubFt-efhGkz72YLI0am3364mogdDJ7uo",
    authDomain: "newsletter-c0588.firebaseapp.com",
    databaseURL: "https://newsletter-c0588-default-rtdb.firebaseio.com",
    projectId: "newsletter-c0588",
    storageBucket: "newsletter-c0588.appspot.com",
    messagingSenderId: "836491558219",
    appId: "1:836491558219:web:1209c608317e6c8c31bcce"
  };


// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
