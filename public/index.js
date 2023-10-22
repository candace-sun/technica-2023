import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from '../src/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// These samples are intended for Web so this import would normally be
// done in HTML however using modules here is more convenient for
// ensuring sample correctness offline.
// import firebase from "firebase/app";
// import "firebase/database";

// function getReference() {
//   // [START rtdb_get_reference]
//   var database = firebase.database();
//   // [END rtdb_get_reference]
// }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtugtk7I6tSFdsbEHaDgqGtVSb8_Qcd3Q",
  authDomain: "technica-de047.firebaseapp.com",
  projectId: "technica-de047",
  storageBucket: "technica-de047.appspot.com",
  messagingSenderId: "545459061130",
  appId: "1:545459061130:web:7714e8cd90b81d1f1cc873"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { getDatabase, connectDatabaseEmulator } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js'


const db = getDatabase();
if (location.hostname === "localhost") {
  // Point to the RTDB emulator running on localhost.
  connectDatabaseEmulator(db, "127.0.0.1", 9000);
} 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
