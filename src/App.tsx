import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginSignup } from './components/pages/LoginSignup/Login-Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginSignup></LoginSignup>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
