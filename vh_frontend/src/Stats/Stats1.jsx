import React, { useState, useEffect } from 'react';
import NavBar from "../dashboard/NavBar";
import Header1 from "../dashboard/Header";
import '../dashboard/Dashboard.css'
import DashboardGrid from "../dashboard/DashboardGrid";
import './statsgrid.css'
import StatsGrid from "./statsgrid"
import LoginComponent from "../login/login";
import Cookies from 'js-cookie';

const Stats1 = () =>
{

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
    return(
        <div className="stats-container">
            <NavBar/>
            <div className="innercont">
            <Header1/>

             {showLoginPage ? (
        <LoginComponent onSubmit={handleLoginSubmit} />
      ) : (
        profileData ? ( 
            <StatsGrid/>
        ) : (
          <div>Loading profile data...</div>
        )
      )} 
            
            </div>
           

        </div>
           )
}

export default Stats1;

