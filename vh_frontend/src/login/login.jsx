import React, { useState } from 'react';
import './App1.css';
import Cookies from 'js-cookie'; // Import js-cookie

const LoginComponent = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Sending POST request to /deliveryPartner/login
      let response = await fetch("https://vh24-debuggers.onrender.com/deliveryPartner/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include', // Ensure credentials are included for cross-site cookies
        body: JSON.stringify({ username: username, password: password })
      });

      // If response is OK, handle success
      if (response.ok) {
        const jsonData = await response.json();
        console.log('Login successful:', jsonData);

        // Set cookie with the login data, expiration time of 1 minute (1/1440 day)
        Cookies.set('user', JSON.stringify(jsonData), { expires: 1 / 1440 });
        setLoading(false);

        // Notify parent component that login was successful
        onSubmit(true);

        // Optionally, redirect the user to another page after successful login
        // window.location.href = '/dashboard';

      } else {
        // Handle failure case with a specific error message
        const result = await response.json();
        setError(result.message || 'Login failed. Please check your credentials.');
        setLoading(false);
        onSubmit(false); // Notify parent component of failed login
      }
    } catch (error) {
      // Handle network or other unexpected errors
      setError('An error occurred. Please try again.');
      setLoading(false);
      onSubmit(false); // Notify parent component of failed login
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="login-label">Username</label>
            <input
              type="text"
              id="username"
              className="login-input"
              value={username}
              title="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="login-label">Password</label>
            <input
              type="password"
              id="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </form>
        {/* Show error message if any */}
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default LoginComponent;
