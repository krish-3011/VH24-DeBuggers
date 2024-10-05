import React from "react";
import './Leaderboard.css';
import NavBar from "../dashboard/NavBar";
import Header1 from "../dashboard/Header";
import Mleaderboard from "./MleaderBoard";

const Leaderboard = () => {
    return (
        <div className="container">
           
            <NavBar/>
        <div class="headerleader">
            <Header1/>
            <Mleaderboard/>
        </div>    

  
        </div>
    )
}

export default Leaderboard;