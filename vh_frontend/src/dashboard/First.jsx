import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import NavBar from "./NavBar";
import Header1 from "./Header";
import DashboardGrid from "./DashboardGrid";
import LoginComponent from "../login/login";
import Cookies from 'js-cookie';

const FirstPage = () => {
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
    <div className="container">
      <NavBar />
      <div className="innercont">
        <Header1 />
         {showLoginPage ? (
          <LoginComponent onSubmit={handleLoginSubmit} />
        ) : (
          profileData ? (
            <DashboardGrid />
            
          ) : (
            <div>Loading profile data...</div>
          )
        )} 
      </div>
    </div>
  );
};

export default FirstPage;
