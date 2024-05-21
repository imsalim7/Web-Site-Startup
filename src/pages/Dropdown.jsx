import React, { useState } from 'react'
import "../styles/dropdown.css";
import real from "../assets/realitylogo.png"
import { Link } from "react-router-dom";
import profil from"../assets/profile.png";

import lgp from"../assets/logout.png"
const Dropdown = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hero1">
      <nav className='sss' >
      <a className="navbar-brand" href="/">
      <img className="logo" src={real} alt="Reality-Check" />
        Reality<b>Check</b>
     </a>
        <img src={profil} className="user-pic1" alt="User" onClick={toggleMenu} />

        <div className={`sub-menu-wrap1 ${menuOpen ? 'open-menu' : ''}`} id="subMenu">
          <div className="sub-menu1">
            <div className="user-info1">
              <img src={profil} alt="User" />
              <h3>Belkhiri Salim</h3>
            </div>
            <hr />
            <Link to="editpro" className="sub-menu-link1">
              <img src={profil} alt="Profile" />
              <p>Edit Profile</p>
              <span></span>
              </Link>
            
            <a href="/" className="sub-menu-link1">
              <img src={lgp} alt="Logout" />
              <p>Logout</p>
              <span></span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Dropdown