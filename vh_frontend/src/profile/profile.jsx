import React, { useState, useEffect } from 'react';
import './profile.css';
import NavBar from "../dashboard/NavBar";
import Header1 from "../dashboard/Header";
import LoginComponent from "../login/login";
import Cookies from 'js-cookie'; // Import js-cookie

const Profile = () => {
  const [showLoginPage, setShowLoginPage] = useState(true);
  const [profileData, setProfileData] = useState(null);

  const handleLoginSubmit = (success) => {
    if (success) {
      const userCookie = Cookies.get('user'); // Read session cookie
      if (userCookie) {
        const data = JSON.parse(userCookie);
        setProfileData(data);
        setShowLoginPage(false);
      }
    } else {
      setShowLoginPage(true);
    }
  };

  useEffect(() => {
    const userCookie = Cookies.get('user'); // Read session cookie
    if (userCookie) {
      const data = JSON.parse(userCookie);
      setProfileData(data);
      setShowLoginPage(false); // Hide login page if user data is found
    } else {
      setShowLoginPage(true); // Show login page if no user data is found
    }
  }, []);

  return (
    <div className="containerprof">
      <NavBar /> {/* Navbar is always rendered */}
      <div className="inner">
        <div className="headdiv">
          <Header1 /> {/* Header is always rendered */}
        </div>
        <div className="profile-content">
          {/* If not logged in, show the login page, otherwise show the profile */}
          {showLoginPage ? (
            <LoginComponent onSubmit={handleLoginSubmit} />
          ) : profileData ? (
            <div className="profile-details">
              <img
                className="profile-pic"
                src="https://t4.ftcdn.net/jpg/05/56/29/91/360_F_556299120_Z7SNJd3KpsN6hii0KmW7Z6TTNVkDwc77.jpg"
                alt="Profile"
              />
              <h3>Full Name :</h3>
              <p>{profileData.fullName}</p>

              <h3>Email :</h3>
              <p>{profileData.email}</p>

              <h3>Joined On :</h3>
              <p>{profileData.joinedOn}</p>

              <h3>Rank: </h3>
              <p>{profileData.rank}</p>

              {/* Render the two cards */}
              <div className="two-cards">
                <div className="card1">
                  <h3>Region:</h3>
                  <p>{profileData.region}</p> {/* Use dynamic data from profileData */}
                </div>
                <div className="card2">
                  <p>hello</p>
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
