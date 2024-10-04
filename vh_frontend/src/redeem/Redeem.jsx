import React from "react";
import NavBar from "../dashboard/NavBar";
import Header1 from "../dashboard/Header";
import '../dashboard/Dashboard.css'
import DashboardGrid from "../dashboard/DashboardGrid";
import GreidRedem from "./GridRedeem";


const Redeem = () =>
(
    <div className="redeem-container">
    <NavBar/>
    <div className="innercont">
    <Header1/>
    <GreidRedem/>
    </div>
    </div>
);
export default Redeem;
