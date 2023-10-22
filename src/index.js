import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { Link } from "react-router-dom";
import { Outlet,BrowserRouter, Routes, Route } from "react-router-dom";
import BeHost from './beHost.js';
import HostList from './hostList.js';
import InfoSignUp from './infoSignUp.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/beHost" element={<BeHost />} />
          <Route path="/hostList" element={<HostList />} />
          <Route path="/infoSignUp" element={<InfoSignUp />} />
      </Routes>
      </BrowserRouter>
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
//const app = initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
