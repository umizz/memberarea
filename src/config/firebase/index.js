import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyC3xE8F80u702PtAtiV5vcBbzgpzcPD8vc",
    authDomain: "memberarea22.firebaseapp.com",
    databaseURL: "https://memberarea22.firebaseio.com",
    projectId: "memberarea22",
    storageBucket: "",
    messagingSenderId: "919091526",
    appId: "1:919091526:web:47100089c0a1e791"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;