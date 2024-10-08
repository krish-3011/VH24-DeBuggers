import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import './redeem.css';
import SpinWheel from "./SpinWheel";
import Token from "./token";

const GreidRedem = () => {
  const [missions, setMissions] = useState([
    { id: 1, text: "Travel a total of 10KMS", completed: false },
    { id: 2, text: "Complete 20 deliveries in a day", completed: false },
    { id: 3, text: "Create or join a team", completed: false },
    { id: 4, text: "Redeem a token", completed: false },
  ]);

  const [xp, setXp] = useState(20); // Default XP set to 20
  const [badgeLevel, setBadgeLevel] = useState('Gold 1'); // Default badge level set to "Gold 1"
  const [tokens, setTokens] = useState(500);

  const items = [
    { id: 1, name: 'Discount Coupon on Lenskart', cost: 300 },
    { id: 2, name: 'Discount Coupon on Food Court', cost: 200 },
    { id: 3, name: 'Salon Coupon', cost: 150 }
  ];

  useEffect(() => {
    const deliveryPartnerData = Cookies.get('deliveryPartner');
    if (deliveryPartnerData) {
      const parsedData = JSON.parse(deliveryPartnerData);
      setXp(parsedData.ex.xp || 20); // Set to parsed XP or default to 20
    }
  }, []);

  const toggleCompletion = (id) => {
    setMissions(missions.map(mission => {
      if (mission.id === id && !mission.completed) {
        setXp(prevXp => {
          const newXp = prevXp + 1;
          if (newXp % 2 === 0) {
            // Update badge level every 2 XP
            setBadgeLevel(prevLevel => prevLevel === 'Gold 1' ? 'Gold 2' : prevLevel);
          }
          return newXp;
        });
        return { ...mission, completed: true };
      }
      return mission;
    }));
  };

  const handlePurchase = (item) => {
    if (tokens >= item.cost) {
      setTokens(prevTokens => prevTokens - item.cost);
      alert(`You purchased ${item.name}!`);
    } else {
      alert("You don't have enough tokens to purchase this item.");
    }
  };

  const handleAddTokens = () => {
    setTokens(tokens + 500);
  };

  return (
    <div className="gridredeem">
      <div className="grid-items small-redeem">
        <img className="goldtoken" src="source/GOLDRANK.png" alt="Gold Badge" />
        <label>Badge: {badgeLevel}</label> 
        <div className="progress-bar" style={{ width: `${(xp % 2) * 50}%`, backgroundColor: 'gold', height: '10px', borderRadius: '5px' }} />
      </div>

      <div className="grid-items small-redeem">
        <img className='token1' src="source/TOKEN.png" alt="Token" />
        <label>Available Tokens: {tokens}</label>
      </div>

      <div className="grid-items small-redeem">
        <img className='Xp' src="source/XP.png" alt="XP" />
        <label>XP: {xp}</label>
        <div className="progress-bar" style={{ width: `${(xp % 2) * 50}%`, backgroundColor: 'blue', height: '10px', borderRadius: '5px' }} />
      </div>

      <div className="grid-items small-redeem">
        <img className='Xp' src="source/ACHIEVE.png" alt="Achievements" />
        <label>Achievements</label>
      </div>

      <div className="grid-itemss large-redeem">
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

      <div className="grid-items large-redeem">
        <SpinWheel />
      </div>

      <div className="grid-items wide-redeem">
        <Token tokens={tokens} handleAddTokens={handleAddTokens} handlePurchase={handlePurchase} items={items} />
      </div>
    </div>
  );
};

export default GreidRedem;
