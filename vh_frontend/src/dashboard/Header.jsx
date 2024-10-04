import React from 'react';
import './Header.css'; // Make sure to create this CSS file for styles

const Header1 = () => {
  return (
    <div className="header-container">
      <input type="text" placeholder="Search..." className="search-bar" />
      <div className='headercontent'>
      <div className="badge">Gold</div>
      <div className="currency">500</div>
      <div className="profile-pic">
        </div>
        <img src="path_to_profile_picture" alt="Profile" />
      </div>
    </div>
  );
};

export default Header1;
