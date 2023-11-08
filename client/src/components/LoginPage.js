// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/styles/LoginPage.css';  // Import the CSS

function LoginPage() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');  // New state for managing error message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                const errorData = await response.json();
                if (errorData.message.includes('Invalid username or password')){
                    setErrorMessage(errorData.message);  // Set error message
                }else{
                    throw new Error(`Network response was not ok ${response.statusText}`);
                }
            }
            const data = await response.json();
            console.log(data);
            setErrorMessage(''); 
            navigate('/home');  // Redirect to home page
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='header'>
            <Link to="/" className="navigation-link">Home</Link>
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}  {/* Display error message */}
            <label htmlFor="username">Username / Email</label>
            <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username or Email"
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                autoComplete="new-password"
            />
            <button type="submit">Login</button>
            <div className='footer'></div>
        </form>
    );
}

export default LoginPage;
