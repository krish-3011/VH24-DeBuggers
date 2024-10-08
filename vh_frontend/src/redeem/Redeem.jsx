import React, { useState, useEffect } from 'react';
import NavBar from "../dashboard/NavBar";
import Header1 from "../dashboard/Header";
import '../dashboard/Dashboard.css'
import DashboardGrid from "../dashboard/DashboardGrid";
import GreidRedem from "./GridRedeem";
import LoginComponent from "../login/login"; // Ensure the path to your Login component is correct
import Cookies from 'js-cookie';



const Redeem = () =>
     {
        const [showLoginPage, setShowLoginPage] = useState(true); // State for showing login page
        const [profileData, setProfileData] = useState(null);     // State for storing profile data
      
       
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
    <div className="redeem-container">
    <NavBar/>
    <div className="innercont">
    <Header1/>
     {showLoginPage ? (
        <LoginComponent onSubmit={handleLoginSubmit} />
      ) : (
        profileData ? (
            <GreidRedem/>
           
        ) : (
          <div>Loading profile data...</div>
        )
      )}  

    
    </div>
    </div>
);
    };
export default Redeem;
