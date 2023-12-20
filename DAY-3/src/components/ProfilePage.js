// ProfilePage.js
import React from 'react';
import Sidebar from './Sidebar';
import './assests/ProfilePage.css';

const ProfilePage = () => {
  // Retrieve username from local storage
  const username = localStorage.getItem('loggedInUser');

  return (
    <div className="ProfilePage-container">
      <Sidebar />
      <div className="ProfilePage-content">
        <h2>Profile Page</h2>
        <div className="profile-info">
          <p>
            <strong>Username:</strong> {username}
          </p>
          {/* Add more profile-related information here */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
