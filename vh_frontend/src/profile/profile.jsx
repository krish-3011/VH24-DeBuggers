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

    // Don't render <Profile /> recursively, just render profile details after successful login
    if (showLoginPage) {
      return <LoginComponent onSubmit={handleLoginSubmit} />;
    }

    // If profile data is available, show the profile
    if (profileData) {
      return (
        <div className="containerprof">
          <NavBar />
          <div className="inner">
            <div className="headdiv">
              <Header1 />
            </div>
            <div className="profile-content">
              <div className="profile-details">
                <img
                  className="profile-pic"
                  src="https://t4.ftcdn.net/jpg/05/56/29/91/360_F_556299120_Z7SNJd3KpsN6hii0KmW7Z6TTNVkDwc77.jpg"
                  alt="Profile"
                />
                <h3>Full Name :</h3>
                <p>{profileData.fullName}</p> {/* Use dynamic data from profileData */}
  
                <h3>Email :</h3>
                <p>{profileData.email}</p> {/* Use dynamic data from profileData */}
  
                <h3>Joined On :</h3>
                <p>{profileData.joinedOn}</p> {/* Use dynamic data from profileData */}
  
                <h3>Rank: </h3>
                <p>{profileData.rank}</p> {/* Use dynamic data from profileData */}
              </div>
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
          </div>
        </div>
      );
    }

    // Show a loading message while profile data is being fetched
    return <div>Loading profile data...</div>;
};

export default Profile;
