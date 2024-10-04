import React from "react";
import './Dashboard.css'
import NavBar from "./NavBar";
import Header1 from "./Header";
import DashboardGrid from "./DashboardGrid";

const FirstPage = () =>
{
    return(
        <div className="container">

            <NavBar />
            <div className="innercont">
            <Header1/>
            <DashboardGrid/>
            </div>
        </div>
           )
}

export default FirstPage;

