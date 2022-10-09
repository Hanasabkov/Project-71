import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyDqWuza8QuuPzkU-ElFpRSxtH2mevEjueQ",
    authDomain: "project-71-8e4ae.firebaseapp.com",
    databaseURL: "https://project-71-8e4ae-default-rtdb.firebaseio.com",
    projectId: "project-71-8e4ae",
    storageBucket: "project-71-8e4ae.appspot.com",
    messagingSenderId: "174027965579",
    appId: "1:174027965579:web:0879abd7b389c152ae808e"
  };
  

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
