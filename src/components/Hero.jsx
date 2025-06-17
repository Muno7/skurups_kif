import React from 'react';
import { Link } from 'react-router-dom';
import '../css/components/hero.css';

function Hero({ 
  title, 
  description, 
  primaryButtonText, 
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}) {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      <div className="container">
        <div className="hero-content fadeIn">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-description fadeIn">{description}</p>
          <div className="hero-buttons fadeIn">
            <Link to={primaryButtonLink} className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              {primaryButtonText}
            </Link>
            <Link to={secondaryButtonLink} className="btn btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 