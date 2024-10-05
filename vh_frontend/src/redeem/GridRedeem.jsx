import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";  // Import js-cookie to access cookie data
import './redeem.css';
import SpinWheel from "./SpinWheel";

const GreidRedem = () => {
  const [missions, setMissions] = useState([
    { id: 1, text: "Travel a total of 10KMS", completed: false },
    { id: 2, text: "Complete 20 deliveries in a day", completed: false },
    { id: 3, text: "Create or join a team", completed: false },
    { id: 4, text: "Redeem a token", completed: false },
  ]);

  const [xp, setXp] = useState(0); // XP state
  const [badgeLevel, setBadgeLevel] = useState(0); // Badge level state

  // Fetch XP and badges from cookie on component mount
  useEffect(() => {
    const deliveryPartnerData = Cookies.get('deliveryPartner');  // Fetch the data from cookie

    if (deliveryPartnerData) {
      const parsedData = JSON.parse(deliveryPartnerData);  // Parse the cookie string to JSON
      setXp(parsedData.ex.xp);  // Set XP from cookie data
      setBadgeLevel(parsedData.badges.length);  // Set badge count based on length of badges array
    }
  }, []);

  // Toggle completion status
  const toggleCompletion = (id) => {
    setMissions(missions.map(mission => {
      if (mission.id === id && !mission.completed) { // Check if the mission is not completed
        // Increase XP and badge level if mission is completed
        setXp(prevXp => {
          const newXp = prevXp + 1;
          // Increase badge level for every 2 XP
          if (newXp % 2 === 0) {
            setBadgeLevel(prevLevel => prevLevel + 1);
          }
          return newXp;
        });
        return { ...mission, completed: true };
      }
      return mission; // Return mission as is if it's already completed
    }));
  };

  return (
    <div className="gridredeem">
      <div className="grid-items small-redeem ">
        <img className="goldtoken" src="source/GOLDRANK.png" alt="Gold Badge" />
        <label>Badge Level: {badgeLevel}</label> {/* Show badge level */}
        <div className="progress-bar" style={{ width: `${(xp % 2) * 50}%`, backgroundColor: 'gold', height: '10px', borderRadius: '5px' }} />
      </div>

      <div className="grid-items small-redeem ">
        <img className='token1' src="source/TOKEN.png" alt="Token" />
        <label>Token</label>
      </div>

      <div className="grid-items small-redeem ">
        <img className='Xp' src="source/XP.png" alt="XP" />
        <label>XP: {xp}</label> {/* Show XP */}
        <div className="progress-bar" style={{ width: `${(xp % 2) * 50}%`, backgroundColor: 'blue', height: '10px', borderRadius: '5px' }} />
      </div>

      <div className="grid-items small-redeem ">
        <img className='Xp' src="source/ACHIEVE.png" alt="Achievements" />
        <label>Achievements</label>
      </div>

      <div className="grid-itemss large-redeem ">
        <h1 className="taskstext">Daily Missions</h1>
        <h2>Active</h2>
        <div className="taskstxt">
          {missions.map(mission => (
            <div key={mission.id} className="mission-item">
              <input
                type="checkbox"
                checked={mission.completed}
                onChange={() => toggleCompletion(mission.id)}
              />
              <label className={mission.completed ? 'completed' : ''}>{mission.text}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="grid-items large-redeem ">
        <SpinWheel />
      </div>

      <div className="grid-items wide-redeem ">Task</div>
    </div>
  );
};

export default GreidRedem;
