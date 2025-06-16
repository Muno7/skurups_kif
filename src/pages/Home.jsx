import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/components/hero.css';
import Slideshow from '../components/Slideshow';
import ActivityCard from '../components/ActivityCard';
import activities from '../data/activities';

import useScrollAnimation from '../hooks/useScrollAnimation';

function Home() {
  // Use the custom hook for each animatable section (activities, slideshow, view all)
  const slideshowRef = useScrollAnimation({
    threshold: 0.1
  });

  return (
    <>
      <section class="hero-section">
        <div class="hero-background">
            <div class="hero-pattern"></div>
            <div class="floating-shapes">
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
                <div class="shape shape-4"></div>
            </div>
        </div>
        <div class="container">
            <div class="hero-content fadeIn">
                <h1 className="hero-title">
                    Välkommen till<br />
                    <span className="text-accent">Skurups Kultur och Idrottsförening</span>
                </h1>
                <p className="hero-description fadeIn">
                    Vi erbjuder en mängd olika aktiviteter för alla åldrar och intressen. Kom och bli en del av vår gemenskap!
                </p>
                <div className="hero-buttons fadeIn">
                    <a href="/aktiviteter" className="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                        Utforska Aktiviteter
                    </a>
                    <a href="/kontakt" className="btn btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        Kontakta Oss
                    </a>
                </div>
            </div>
        </div>
      </section>

      <section className="activities-section">
          <div className="container">
              <div className="section-header">
                  <h2 className="section-title">Utforska våra aktiviteter och evenemang</h2>
                  <div className="title-underline"></div>
              </div>
              
              <div className="activities-grid">
                  {activities.slice(0, 3).map((activity) => (
                      <ActivityCard key={activity.id} activity={activity} />
                  ))}
              </div>
              
              <div className="view-all-container">
                  <Link to="/activities" className="view-all-button">Visa alla aktiviteter</Link>
              </div>
          </div>
      </section>

      <section className="slideshow-section">
          <div className="container">
              <div className="section-header">
                  <h2 className="section-title">Vår Gemenskap</h2>
                  <div className="title-underline"></div>
              </div>
              
              <div ref={slideshowRef} className="slideshow-container fadeIn">
                  <Slideshow />
              </div>
          </div>
      </section>
    </>
  );
}

export default Home; 