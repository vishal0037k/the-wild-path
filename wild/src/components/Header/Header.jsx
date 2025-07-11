import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png"; // adjust if needed
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="The Wild Path Logo" />
          <span>𝕋𝕙𝕖 𝕨𝕚𝕝𝕕 𝕡𝕒𝕥𝕙</span>
        </div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </nav>

        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
