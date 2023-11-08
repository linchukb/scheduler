// src/components/SuccessPage.js
import React from 'react';
import '../assets/styles/SuccessPage.css';  // Import the CSS
import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <div className='success-page'>
        <div className='header'></div>
        <h1>Registration Successful!</h1>
        <Link to="/home" className="navigation-link">Home</Link>
        <Link to="/login" className="navigation-link">Login</Link>
        <div className='footer'></div>
    </div>
  );
}

export default SuccessPage;
