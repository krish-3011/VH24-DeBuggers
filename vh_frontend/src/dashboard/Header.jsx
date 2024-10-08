import React from 'react';
import './Header.css'; // Make sure to create this CSS file for styles

const Header1 = () => {
  return (
    <div className="header-container">
    <h1 className='Teamheading'>DEBUGGERS</h1>
      <div className='headercontent'>
      <div className="badge" ><img className="gold"src="source/GOLDRANK.png" alt="img"  /> </div>
      <div className="currency">
        <img className='token' src="source/TOKEN.png" alt="" />500</div>
      <div className="profile-pic">
        </div>
        <img src="path_to_profile_picture" alt="Profile" />
      </div>
    </div>
  );
};

export default Header1;
