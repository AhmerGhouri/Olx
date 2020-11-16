import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics'


  var firebaseConfig = {
    apiKey: "AIzaSyAdjnmtvOWk03n2FLRTJGBVL2HAzzIJBtg",
    authDomain: "olx-app-78e35.firebaseapp.com",
    databaseURL: "https://olx-app-78e35.firebaseio.com",
    projectId: "olx-app-78e35",
    storageBucket: "olx-app-78e35.appspot.com",
    messagingSenderId: "203497022680",
    appId: "1:203497022680:web:9b1822896f696c683a23ad",
    measurementId: "G-8L16DT507L"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;



 
