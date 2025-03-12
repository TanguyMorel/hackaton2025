import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">X</h2>
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">
          🏠 <span>Accueil</span>
        </Link>
        <Link to="/notifications" className="sidebar-link">
          🔔 <span>Notifications</span>
        </Link>
        <Link to="/profile" className="sidebar-link">
          👤 <span>Mon Profil</span>
        </Link>
        <Link to="/mes-favoris" className="sidebar-link">⭐ <span>Mes Favoris</span></Link>
      </nav>
    </div>
  );
};

export default Sidebar;
