// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Make sure you have corresponding CSS for styling

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <h3>Navigation</h3>
      <ul>
        <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
        <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
        <li><Link to="/schedule" onClick={toggleSidebar}>Schedule</Link></li>
        <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
        <li><Link to="/register" onClick={toggleSidebar}>Register</Link></li>
        <li><Link to="/Events" onClick={toggleSidebar}>Events</Link></li>
        
      </ul>
    </div>
  );
};

export default Sidebar;