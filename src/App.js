import {useState} from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from './pages/home';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='*' element={ <NotFoundPage /> } /> */}
        {/* <Route path='/dashboard/*' element={!isLoggedIn ? <Navigate to="/" /> : <DashboardPage />} /> */}
        {/* <Route exact path='/' element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />} /> */}

      </Routes>
    </div>
  );
}

export default App;
