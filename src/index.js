import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './signup';
import Login from './Login';
import LoginSucces from './LoginSucces';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/loginsuccess" element={<LoginSucces/>}/>
    
  </Routes>
  </BrowserRouter>
);

