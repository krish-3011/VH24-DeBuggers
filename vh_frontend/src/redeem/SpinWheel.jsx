import React, { useState } from "react";
import './SpinWheel.css';

const SpinWheel = () => {
  const [rotation, setRotation] = useState(0);  // State to track the current rotation degree

  const spin = () => {
    const randomRotation = Math.floor(Math.random() * 360) + 360 * 3; // Random degrees with 3 full spins
    setRotation(randomRotation);  // Update state with the new random rotation
  };

  return (
    <div>
      {/* Image that rotates based on the rotation state */}
      <img
        className="spinny"
        src="source/spin.png"
        alt="spin"
        style={{ transform: `rotate(${rotation}deg)` }}  // Apply rotation dynamically
      />

      {/* Button to trigger the spin */}
      <button onClick={spin} style={{ marginTop: '20px', padding: '10px', fontSize: '16px' }}>
        Spin the Wheel
      </button>
    </div>
  );
};

export default SpinWheel;
