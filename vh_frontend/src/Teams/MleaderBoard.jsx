import React, { useState } from 'react';
import './Leaderboard.css'; 

const Mleaderboard = () => {
  // Default player data for 7 players
  const defaultPlayers = [
    { id: 1, name: 'John Doe', exp: 1500 },
    { id: 2, name: 'Jane Smith', exp: 1400 },
    { id: 3, name: 'Mark Johnson', exp: 1300 },
    { id: 4, name: 'Sara Williams', exp: 1200 },
    { id: 5, name: 'Chris Lee', exp: 1100 },
    { id: 6, name: 'Alex Kim', exp: 1000 },
    { id: 7, name: 'Taylor Brown', exp: 900 }
  ];

  const [players, setPlayers] = useState(defaultPlayers); // Set the initial state with default players

  // Function to get medal based on rank
  const getMedal = (rank) => {
    switch (rank) {
      case 1:
        return '🥇'; // Gold Medal
      case 2:
        return '🥈'; // Silver Medal
      case 3:
        return '🥉'; // Bronze Medal
      default:
        return ''; // No medal for other ranks
    }
  };

  return (
    <div className="leaderboard">
      <h1 style={{ color: 'black' }}>Leaderboard</h1> {/* Adding inline style to ensure visibility */}
      {/* Leaderboard table display */}
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player Name</th>
            <th>EXP</th>
          </tr>
        </thead>
        <tbody>
          {players.length > 0 ? ( // Check if players exist
            players.map((player, index) => (
              <tr key={player.id}>
                <td>{getMedal(index + 1)} {index + 1}</td> {/* Display medal based on rank */}
                <td>{player.name}</td>
                <td>{player.exp}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No players found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Mleaderboard;
