// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assests/LoginPage.css';
import Navbar from './Navbar';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the username and password match any stored credentials
    const storedPassword = localStorage.getItem(username);
    if (username === 'admin' && password === '123') {
      // Redirect to the dashboard for admin
      localStorage.setItem('loggedInUser', 'admin');
      navigate('/dashboard');
    } else if (storedPassword === password) {
      // Redirect to the dashboard for regular users
      localStorage.setItem('loggedInUser', username);
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-body">
      <Navbar />
      <div className="login-container">
        <h2>Login Page</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
