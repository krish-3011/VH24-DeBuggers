import React from "react";
import './Team.css';
import NavBar from "../dashboard/NavBar";
import Header1 from "../dashboard/Header";

const Team = () => {
    return (
        <div className="container">
            <NavBar/>
            <div className="inner">
                <div className="headdiv">
                    <Header1/>
                </div>
                
                    <div className="Create-team">
                        <input type="button" className="Create" value="Create"></input>
                    </div>
                    <div className="Team-box">
                    <div className="Team-detail">
                        <p>Krish</p>
                    </div>
                    <div className="Team-detail">
                        <p>Mann</p>
                    </div>
                    <div className="Team-detail">
                        <p>Meet</p>
                    </div>
                    <div className="Team-detail">
                        <p>Divij</p>
                    </div>
                </div>
                <div className="Task"><h1>Tasks</h1></div>
                <div className="Task-given"></div>
            </div>
            
        </div>
    )
}

export default Team;