import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Login from './components/Login';
import useToken from './components/useToken';


function App() {
  
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes> 
                    <Route path="/" exact element={<Dashboard />} /> 
                    <Route path="/Dashboard" exact element={<Dashboard />} /> 
                    <Route path="/Prefrences" element={<Preferences />} /> 
                </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;