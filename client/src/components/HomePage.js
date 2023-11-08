import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/HomePage.css';  // Import the CSS

function HomePage() {
  return (
    <div className='container'>
      <div className='home-page'>
          <div className='header'>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </div>
          <div className='content'>
              <h1>Bogdan Linchuk's calendar</h1>
          </div>
          <div className='footer'></div>
      </div>
    </div>
  );
}

export default HomePage;
