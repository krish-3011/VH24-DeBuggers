import React from "react";
import NavBar from "../dashboard/NavBar";
import Header1 from "../dashboard/Header";
import '../dashboard/Dashboard.css'
import DashboardGrid from "../dashboard/DashboardGrid";
import './statsgrid.css'
import StatsGrid from "./statsgrid"

const Stats1 = () =>
{
    return(
        <div className="stats-container">
            <NavBar/>
            <div className="innercont">
            <Header1/>
            <StatsGrid/>
            </div>
           

        </div>
           )
}

export default Stats1;

