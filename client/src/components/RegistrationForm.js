import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import '../assets/styles/RegistrationForm.css';  // Import the CSS

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
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
            const response = await fetch('/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                const errorData = await response.json();
                if (errorData.message.includes('Username or email already exists')) {
                    setErrorMessage(errorData.message);  // Set error message
                } else {
                    throw new Error(`Network response was not ok ${response.statusText}`);
                }
            } else {
                const data = await response.json();
                console.log(data);
                setErrorMessage('');  // Clear error message upon successful registration
                navigate('/success');  // Redirect to success page
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    return (
        <div>
            <div className='header'></div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
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
                {errorMessage && <div className="error-message">{errorMessage}</div>}  {/* Conditionally render error message */}
                <button type="submit">Register</button>
            </form>
            <div className='footer'></div>
        </div>
    );
}

export default RegistrationForm;
