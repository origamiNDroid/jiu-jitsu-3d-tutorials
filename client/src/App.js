import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/HomePage';
import Techniques from './pages/TechniquesPage'
import Signin from './pages/SigninPage'
import SignUpPage from './pages/SignUpPage';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/ProfilePage';

import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div>
          <Routes className='container mt-3'>
            <Route path={'/'} element={<Home />} />
            <Route exact path='/signin' element={<Signin />} />
            <Route exact path='/signup' element={<SignUpPage />} />
            <Route exact path='/forgotpassword' element={<ForgotPassword />} />
            <Route exact path='/techniques' element={<Techniques />} />
            <Route exact path='/profile:user' element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};


export default App;