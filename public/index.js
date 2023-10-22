import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from '/Home';
import reportWebVitals from '../src/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Outlet,BrowserRouter, Routes, Route } from "react-router-dom";
import BeHost from 'beHost.js';
import HostList from 'hostList.js';
import InfoSignUp from 'infoSignUp.js';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
