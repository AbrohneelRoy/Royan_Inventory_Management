// Sidebar.js
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './assests/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleItemClick = (path) => {
    setActiveItem(path);
    navigate(path);
  };

  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">Royan</div>
      <ul className="sidebar-list">
        <li
          className={`sidebar-list-item ${activeItem === '/dashboard' ? 'active-item' : ''}`}
          onClick={() => handleItemClick('/dashboard')}
        >
          <Link to="/dashboard" className="sidebar-link">
            Dashboard
          </Link>
        </li>
        <li
          className={`sidebar-list-item ${activeItem === '/profile' ? 'active-item' : ''}`}
          onClick={() => handleItemClick('/profile')}
        >
          <Link to="/profile" className="sidebar-link">
            Profile
          </Link>
        </li>
        <li
          className={`sidebar-list-item ${activeItem === '/inventory' ? 'active-item' : ''}`}
          onClick={() => handleItemClick('/inventory')}
        >
          <Link to="/inventory" className="sidebar-link">
            Inventory
          </Link>
        </li>
        <li
          className={`sidebar-list-item ${activeItem === '/signup' ? 'active-item' : ''}`}
          onClick={() => handleItemClick('/signup')}
        >
          <Link to="/signup" className="sidebar-link">
            Sign Up
          </Link>
        </li>
        {/* Add the "Orders" link */}
        <li
          className={`sidebar-list-item ${activeItem === '/orders' ? 'active-item' : ''}`}
          onClick={handleSignOut}
        >
          <Link to="/orders" className="sidebar-link">
            Logout
          </Link>
        </li>
      </ul>
     
    </div>
  );
};

export default Sidebar;
