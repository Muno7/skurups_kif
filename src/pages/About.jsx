import React from 'react';
import { Link } from 'react-router-dom';
import '../css/pages/about.css';
import '../css/animations.css';

import useScrollAnimation from '../hooks/useScrollAnimation';

function About() {
  const cardRef1 = useScrollAnimation({
    threshold: 0.1
  });

  const cardRef2 = useScrollAnimation({
    threshold: 0.1
  });

  const valueCardRef1 = useScrollAnimation({
    threshold: 0.1
  });

  const valueCardRef2 = useScrollAnimation({
    threshold: 0.1
  });

  const valueCardRef3 = useScrollAnimation({
    threshold: 0.1
  });

  return (
    <div className="about-page">
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
                <h1 className="hero-title text-accent">Bli en del av vår gemenskap</h1>
                <p className="hero-description fadeIn">
                    Kom och upplev allt som Skurups Kultur och Idrottsförening har att erbjuda. 
                    Vi ser fram emot att välkomna dig i vår varma och inkluderande miljö!
                </p>
                <div className="hero-buttons fadeIn">
                    <Link to="/aktiviteter" className="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                        Utforska Aktiviteter
                    </Link>
                    <Link to="/kontakt" className="btn btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        Kontakta Oss
                    </Link>
                </div>
            </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <h2 className="section-title">Vilka Vi Är & Vår Resa</h2>
          <div className="about-content-grid">
            <div ref={cardRef1} className="about-content-card fadeIn">
              <h3><span className="about-card-icon">🌱</span>Vår Vision & Grund</h3>
              <p>
                Skurups Kultur och Idrottsförening grundades med visionen att förena kultur och idrott i Skurup. Vi har alltid strävat efter att skapa en inkluderande och stödjande miljö där alla känner sig välkomna och kan växa tillsammans.
              </p>
            </div>
            <div ref={cardRef2} className="about-content-card fadeIn">
              <h3><span className="about-card-icon">🚀</span>Utveckling & Framtid</h3>
              <p>
                Genom åren har vi breddat vårt utbud av aktiviteter och evenemang för alla åldrar. Vårt mål är att fortsätta inspirera och stödja varje individs resa mot personlig utveckling och gemenskap.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title fadeIn">Våra Värderingar</h2>
          <div className="values-grid">
            <div ref={valueCardRef1} className="value-card fadeIn">
              <div className="value-icon">🤝</div>
              <h3>Gemenskap</h3>
              <p>Vi skapar en välkomnande miljö där alla känner sig hemma och kan bygga varaktiga vänskap genom gemensamma intressen.</p>
            </div>
            <div ref={valueCardRef2} className="value-card fadeIn">
              <div className="value-icon">🎯</div>
              <h3>Utveckling</h3>
              <p>Vi stödjer varje individs personliga resa och uppmuntrar kontinuerlig utveckling både inom sport och som person.</p>
            </div>
            <div ref={valueCardRef3} className="value-card fadeIn">
              <div className="value-icon">❤️</div>
              <h3>Respekt</h3>
              <p>Respekt för varandra, för sporten och för våra faciliteter är grundpelaren i allt vi gör tillsammans som förening.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 