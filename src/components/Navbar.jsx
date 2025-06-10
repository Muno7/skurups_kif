import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import skifLogo from '../assets/logo/skif_logo.png'; // Import the logo
import '../css/components/header.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to control body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Clean up function to ensure scrolling is re-enabled if component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="site-header">
        <div className="container header-container">
            <div className="header-left">
                <Link to="/" className="logo-link">
                    <img src={skifLogo} alt="Skurups Kultur & Idrottsförening Logo" className="logo"/>
                    <span className="site-name">SKURUPS KIF</span>
                </Link>
            </div>
            <div className="nav-container">
                <nav className="nav-links">
                    <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                        <span className="nav-text">Hem</span>
                    </NavLink>
                    <NavLink to="/activities" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                        <span className="nav-text">Aktiviteter</span>
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                        <span className="nav-text">Om oss</span>
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                        <span className="nav-text">Kontakt</span>
                    </NavLink>
                </nav>
                
                <button className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Öppna meny" onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
        
        <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-nav-inner">
                <div className="mobile-nav-header">
                    <img src={skifLogo} alt="Skurups KIF Logo" className="mobile-logo"/>
                </div>
                <nav className="mobile-nav-links">
                    <NavLink to="/" className={({ isActive }) => "mobile-nav-link" + (isActive ? " active" : "")} onClick={toggleMobileMenu}>Hem</NavLink>
                    <NavLink to="/activities" className={({ isActive }) => "mobile-nav-link" + (isActive ? " active" : "")} onClick={toggleMobileMenu}>Aktiviteter</NavLink>
                    <NavLink to="/about" className={({ isActive }) => "mobile-nav-link" + (isActive ? " active" : "")} onClick={toggleMobileMenu}>Om oss</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => "mobile-nav-link" + (isActive ? " active" : "")} onClick={toggleMobileMenu}>Kontakt</NavLink>
                </nav>
                <div className="mobile-nav-footer">
                    <a href="tel:+46123456789" className="mobile-contact-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        Ring oss
                    </a>
                    <a href="mailto:info@skurupskif.se" className="mobile-contact-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        Maila oss
                    </a>
                </div>
            </div>
        </div>
        
        <div className={`site-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
    </header>
  );
}

export default Navbar; 