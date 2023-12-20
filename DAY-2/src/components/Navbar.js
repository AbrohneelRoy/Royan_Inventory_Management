// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './assests/Navbar.css';

const Navbar = () => {
  const scrollToAbout = () => {
    window.scrollTo({
      top: 690,
      behavior: 'smooth',
    });
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: 10000,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Royan
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li className="navbar-item">
          <button onClick={scrollToAbout}>
            About Us
          </button>
        </li>
        <li className="navbar-item">
          <button onClick={scrollToContact}>
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
