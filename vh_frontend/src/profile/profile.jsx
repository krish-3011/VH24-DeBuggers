import React, { useState, useEffect } from 'react';
import './profile.css';
import NavBar from "../dashboard/NavBar";   // Ensure this path matches your NavBar component
import Header1 from "../dashboard/Header"; // Ensure this path matches your Header component
import LoginComponent from "../login/login"; // Ensure the path to your Login component is correct
import Cookies from 'js-cookie';  // Import js-cookie for handling cookies

const Profile = () => {
  const [showLoginPage, setShowLoginPage] = useState(true); // State for showing login page
  const [profileData, setProfileData] = useState(null);     // State for storing profile data

  // Handle login submission
  const handleLoginSubmit = (success) => {
    if (success) {
      const userCookie = Cookies.get('user');  // Read session cookie
      if (userCookie) {
        const data = JSON.parse(userCookie);
        setProfileData(data);                  // Set profile data after successful login
        setShowLoginPage(false);               // Hide login page
      }
    } else {
      setShowLoginPage(true);
    }
  };

  // Check for existing user cookie on initial load
  useEffect(() => {
    const userCookie = Cookies.get('user');  // Check for cookie
    if (userCookie) {
      const data = JSON.parse(userCookie);
      setProfileData(data);
      setShowLoginPage(false);  // Hide login page if user data is found
    } else {
      setShowLoginPage(true);   // Show login page if no user data is found
    }
  }, []);

  return (
    <div className="container">
      <NavBar /> 
      <div className="inner">
        <Header1 /> 
        <div className="profile-content">
          
          {/* Conditional rendering for login or profile data */}
          {showLoginPage ? (
            <LoginComponent onSubmit={handleLoginSubmit} />  // Show login component
          ) : profileData ? (  // If profile data exists, show profile details
            <div className="profile-details">
              <img
                className="profile-pic"
                src="https://t4.ftcdn.net/jpg/05/56/29/91/360_F_556299120_Z7SNJd3KpsN6hii0KmW7Z6TTNVkDwc77.jpg" 
                alt="Profile"
              />
              <h3>Full Name :</h3>
              <p>{profileData.fullName || "Rajen Dasgupta Sengupta Ghosh"}</p>

              <h3>Email :</h3>
              <p>{profileData.email || "rajen@gmail.com"}</p>

              <h3>Joined On :</h3>
              <p>{profileData.joinedOn || "2022-03-25"}</p>

              <h3>Rank: </h3>
              <p>{profileData.rank || "1"}</p>

              {/* Two cards for additional profile details */}
              <div className="two-cards">
                <div className="card1">
                  <h3>Region:</h3>
                  <p>{profileData.region || "Unknown"}</p>
                </div>
                <div className="card2">
                  <h3>Additional Info</h3>
                  <p>Placeholder for more details</p>
                </div>
              </div>
            </div>
          ) : (
            <div>Loading profile data...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
