import React from "react";
import './profile.css';
import NavBar from "../dashboard/NavBar";
import Header1 from "../dashboard/Header";
//import profileImage from "./{CC102CCB-7D13-4DC4-9EFA-EDF9C2A00661}.png"; // Ensure path matches your image file

const Profile = () => {
  return (
    <div className="containerprof">
      <NavBar />
      <div className="inner">
        <div className="headdiv">
        <Header1 />
        </div>
        <div className="profile-content">
          <div className="profile-details">

            <img className="profile-pic" src="https://t4.ftcdn.net/jpg/05/56/29/91/360_F_556299120_Z7SNJd3KpsN6hii0KmW7Z6TTNVkDwc77.jpg" alt="img"></img>
            <h3>Full Name :</h3>
            <p>Rajen Dasgupta Sengupta Ghosh</p>

            <h3>Email :</h3>
            <p>rajen@gmail.com</p>

            <h3>Joined On :</h3>
            <p>2022-03-25</p>

            <h3>Rank: </h3>
            <p>1</p>
          </div>

          <div className="two-cards">
            <div className="card1">
              <h3>Region:</h3>
              <p>Mumbai</p>
            </div>
            <div className="card2">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;