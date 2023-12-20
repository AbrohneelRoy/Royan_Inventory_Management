import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assests/SignupForm.css';
import Sidebar from './Sidebar';

const SignupForm = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [adminKey, setAdminKey] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if the admin key is correct
    if (adminKey !== 'admin321') {
      setError('Incorrect admin key');
      return;
    }

    // Check if the username already exists
    if (localStorage.getItem(username)) {
      setError('Username already exists');
    } else {
      // Store new user credentials
      localStorage.setItem(username, password);

      // Notify the parent component about the signup
      onSignup();

      // Redirect to the login page
      navigate('/login');
    }
  };

  return (
    <div className="signup-body">
      <Sidebar />
    <div className="signup-container">
    <form className="signup-form" onSubmit={handleSignup}>
      <label htmlFor="adminKey">Admin Key:</label>
      <input
        type="password"
        id="adminKey"
        name="adminKey"
        value={adminKey}
        onChange={(e) => setAdminKey(e.target.value)}
        required
      />

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

      <button type="submit">Sign Up</button>

      {error && <p className="error-message">{error}</p>}
    </form>
    </div>
    </div>
  );
};

export default SignupForm;
