import React, { useState } from 'react';
import './App1.css'
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
      let response = await fetch("https://vh24-debuggers.onrender.com/deliveryPartner/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include', // Ensure credentials are included
        body: JSON.stringify({ username: username, password: password })
      });

      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData);
        // Set cookie with an expiration time of 1 minute
        Cookies.set('user', JSON.stringify(jsonData), { expires: 1 / 1440 }); // 1 minute = 1/1440 day
        setLoading(false);
        onSubmit(true); // Notify parent component of successful login
      } else {
        const result = await response.json();
        setError(result.message);
        setLoading(false);
        onSubmit(false); // Notify parent component of failed login
      }
    } catch (error) {
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
            <label htmlFor="username" className="login-label">Enrollment</label>
            <input
              type="text"
              id="username"
              className="login-input"
              value={username}
              title="enter username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="login-label">Date</label>
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
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default LoginComponent;