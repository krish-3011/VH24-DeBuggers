import React from "react";
import './redeem.css'
import SpinWheel from "./SpinWheel";


const GreidRedem = () => 
(
    <div className="gridredeem">
        <div className="grid-items small-redeem "><img className="goldtoken"src="source/GOLDRANK.png" alt="img"  />  <label>Badge</label></div>
      
        <div className="grid-items small-redeem "> <img className='token1' src="source/TOKEN.png" alt="" /><label>Token</label></div>
        <div className="grid-items small-redeem "><img className='Xp' src="source/XP.png" alt="" /><label>XP</label></div>
        <div className="grid-items small-redeem "><img className='Xp' src="source/ACHIEVE.png" alt="" /><label>Achivements</label></div>
        <div className="grid-itemss large-redeem "><h1 className="taskstext">TASKS</h1>
        <h2>Active</h2>
       <div className="taskstxt"> <input value="TRAVEL A TOTAL OF 10KMS "name="Birthdate" className="redeemtext" readOnly />
        <input value="COMPLETE 20 DILIVERIES IN A DAY"name="Birthdate" className="redeemtext" readOnly />
        <input value="CREATE OR JOIN A TEAM"name="Birthdate" className="redeemtext" readOnly />
        <input value="REDEEM A TOKEN"name="Birthdate" className="redeemtext" readOnly />
        </div>
        
        </div>
        <div className="grid-items large-redeem "><SpinWheel/></div>
        <div className="grid-items wide-redeem ">Task</div>
        

        </div>
)

export default GreidRedem;

