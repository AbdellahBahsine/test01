import {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from './pages/home';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';

import { useSelector } from 'react-redux';

import Cookies from 'js-cookie';
import axios from 'axios';

function App() {

  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

  useEffect(() => {
    if(Cookies.get('authToken')){
      
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='*' element={ <NotFoundPage /> } /> */}
        {/* <Route path='/dashboard/*' element={!isLoggedIn ? <Navigate to="/" /> : <DashboardPage />} /> */}
        <Route exact path='/login' element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />} />
        <Route exact path='/dashboard' element={isLoggedIn ?  <DashboardPage /> : <Navigate to="/login" />}  />
      </Routes>
    </div>
  );
}

export default App;
