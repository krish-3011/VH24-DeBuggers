import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const menuItems = [
    { name: "Dashboard", icon: "⬜" },
    { name: "Stats", icon: "📦" },
    { name: "Redeem", icon: "📍" },
    { name: "Team", icon: "🧾" },
    { name: "Statements", icon: "📊" },
    { name: "Profile", icon: "⚙️" },
    { name: "Support", icon: "🎧" },
  ];

  return (
    <div className="Navbarmaincontainer">
      <div className="navbarside">
        <img src="https://cdn-icons-png.flaticon.com/128/9561/9561839.png" alt="Logo"/>
      </div>
      {menuItems.map((item, index) => (
        <Link
          to={`/${item.name.toLowerCase().replace(/ /g, '-')}`}
          key={index}
          className="sidebar-button no-underline"
        >
          <i>{item.icon}</i>
          <span className="sidebar-text">{item.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default NavBar;