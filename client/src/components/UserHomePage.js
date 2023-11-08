import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/UserHomePage.css';  // Import the CSS

function UserHomePage() {
    return (
        <div>
            <div className='header'>
                <Link to="/login" className="navigation-link">Logout</Link>
            </div>
            <h1>User Home Page</h1>
            <Link to="/schedule" className="public-schedule-link">My public page</Link>  {/* New link */}
            <div className='footer'></div>
        </div>
    );
}

export default UserHomePage;
