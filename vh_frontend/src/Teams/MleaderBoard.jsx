import React, { useState, useEffect } from 'react';
import './Leaderboard.css'; 

const Mleaderboard = () => {
  const [players, setPlayers] = useState([]); // Store the leaderboard players

  // Fetch leaderboard data from the backend on component mount
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('https://vh24-debuggers.onrender.com/leaderboard');
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="leaderboard">
      <h1 style={{ color: 'black' }}>Leaderboard</h1> {/* Adding inline style to ensure visibility */}
      {/* Leaderboard display */}
      <ul>
        {players.length > 0 ? ( // Check if players exist
          players.map((player, index) => (
            <li key={player.id}>
              {index + 1}. {player.name} - {player.exp} EXP
            </li>
          ))
        ) : (
          <li>No players found.</li> // Display a message if no players
        )}
      </ul>
    </div>
  );
};

export default Mleaderboard;
