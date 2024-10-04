import React from "react";
import './profile.css';
import NavBar from "./navbar";
import Header1 from "./header";
//import profileImage from "./{CC102CCB-7D13-4DC4-9EFA-EDF9C2A00661}.png"; // Ensure path matches your image file

const Profile = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="inner">
        <Header1 />
        <div className="profile-content">
          <div className="profile-details">
            <h3>Full Name :</h3>
            <p>Rajen Dasgupta Sengupta Ghosh</p>

            <h3>Email :</h3>
            <p>rajen@gmail.com</p>

            <h3>Joined On :</h3>
            <p>2022-03-25</p>

            <h3>Rank: </h3>
            <p>1</p>
          </div>

          <div className="profile-picture">
            <img src="" alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
