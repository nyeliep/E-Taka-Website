import React from "react";
import { useState } from "react";
import './style.css'
import { OvalShape, VCutout, CustomerReview } from "../../Atom";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';



export const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (navItem) => {
    setSelectedNav(navItem);
    setMenuOpen(false); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  // Function to close the menu when a link is clicked (for small screens)
  const closeMenu = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    }
  };

  return (
    <div>
      <div className="nav-bar-container">
        <img src="media/logo.png" alt="Logo"></img>

        {/* Hamburger menu button */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
        </div>

        {/* Navigation links */}
        <div className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="/home" className={`nav-link ${selectedNav === null ? 'active' : ''}`} onClick={() => {handleNavClick(null); closeMenu();}}>
            Home
          </a>
          <a href="/services" className={`nav-link ${selectedNav === 'offer' ? 'active' : ''}`} onClick={() => {handleNavClick('offer'); closeMenu();}}>
            Services
          </a>
          <a href="/about" className={`nav-link ${selectedNav === 'service' ? 'active' : ''}`} onClick={() => {handleNavClick('service'); closeMenu();}}>
            About
          </a>
          <a href="/reviews" className={`nav-link ${selectedNav === 'menu' ? 'active' : ''}`} onClick={() => {handleNavClick('menu'); closeMenu();}}>
            Reviews
          </a>
          <a href="/contact" className={`nav-link ${selectedNav === 'about' ? 'active' : ''}`} onClick={() => {handleNavClick('about'); closeMenu();}}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};