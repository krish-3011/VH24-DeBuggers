import React, { useState, useEffect } from "react";
import './profile.css';
import NavBar from "../dashboard/NavBar";
import Header1 from "../dashboard/Header";
import LoginComponent from "../login/login"; // Make sure the path is correct
import Cookies from 'js-cookie'; // Import js-cookie to handle cookies

const Profile = () => {
  const [showLoginPage, setShowLoginPage] = useState(true); // Manage login page visibility
  const [profileData, setProfileData] = useState(null);     // Store profile data

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

  // Check for existing user cookie on component load
  useEffect(() => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
      const data = JSON.parse(userCookie);
      setProfileData(data);
      setShowLoginPage(false);                 // If user data exists, show profile
    } else {
      setShowLoginPage(true);                  // Else, show login page
    }
  }, []);

  return (
    <div className="profcontainer">
      <NavBar />
      <div className="inner">
        <div className="headd">
          <Header1 />
        </div>

        {/* Conditional rendering: show login page or profile details */}
        {showLoginPage ? (
          <LoginComponent onSubmit={handleLoginSubmit} /> 
        ) : (
          <div className="profile-content">
            <div className="profile-details">
              <h3>Full Name :</h3>
              <p>{profileData?.fullName || "Rajen Dasgupta Sengupta Ghosh"}</p>

              <h3>Email :</h3>
              <p>{profileData?.email || "rajen@gmail.com"}</p>

              <h3>Joined On :</h3>
              <p>{profileData?.joinedOn || "2022-03-25"}</p>

              <h3>Rank: </h3>
              <p>{profileData?.rank || "1"}</p>
            </div>

            <div className="profile-picture">
              <img 
                src={profileData?.profilePicture || "https://via.placeholder.com/150"} 
                alt="Profile" 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
