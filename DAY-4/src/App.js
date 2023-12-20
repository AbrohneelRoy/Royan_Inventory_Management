// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import ProfilePage from './components/ProfilePage';
import Inventory from './components/Inventory';
import SignupForm from './components/SignupForm'; 


const App = () => {
  const [inventory, setInventory] = useState([]);

  const handleInventoryChange = (updatedInventory) => {
    setInventory(updatedInventory);
  };

  const handleSignup = () => {
    // This function can be empty or used for any additional signup-related logic
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard inventory={inventory} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/inventory"
          element={<Inventory onInventoryChange={handleInventoryChange} />}
        />
        <Route path="/signup" element={<SignupForm onSignup={handleSignup} />} />
      </Routes>
    </Router>
  );
};

export default App;
