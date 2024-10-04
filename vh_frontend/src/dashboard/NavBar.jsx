import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const menuItems = [
    { name: "Dashboard", icon: "⬜" },
    { name: "Load Board", icon: "📦" },
    { name: "Tracking", icon: "📍" },
    { name: "Invoice", icon: "🧾" },
    { name: "Report", icon: "📊" },
    { name: "Settings", icon: "⚙️" },
    { name: "Support", icon: "🎧" },
  ];

  return (
    <div className="Navbarmaincontainer">
      <div className="navbarside"></div>
      {menuItems.map((item, index) => (
        <div key={index} className="sidebar-button">
          <i>{item.icon}</i> 
          <Link to={`/${item.name.toLowerCase().replace(/ /g, '-')}`} className="sidebar-text no-underline">
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NavBar;