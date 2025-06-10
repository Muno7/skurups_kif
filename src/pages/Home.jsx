import React from 'react';
import { Link } from 'react-router-dom';
import '../css/pages/home/hero.css';
import Slideshow from '../components/Slideshow';
import ActivityCard from '../components/ActivityCard';
import activities from '../data/activities';

function Home() {
  return (
    <>
      <section className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
          <div className="container hero-container">
              <div className="hero-content">
              <h1 className="animate-in">
                  Välkommen till <span className="text-accent">Skurups Kultur och Idrottsförening!</span>
              </h1>
              <p className="animate-in delay-1">
                  Vi erbjuder en mängd olika aktiviteter för alla åldrar och intressen. Kom och bli en del av vår gemenskap!
              </p>
              <div className="hero-buttons animate-in delay-2">
                  <Link to="/activities" className="btn btn-secondary">
                  <i className="icon-calendar"></i> Utforska aktiviteter
                  </Link>
                  <Link to="/about" className="btn btn-white-outline">
                  <i className="icon-info"></i> Läs mer om oss
                  </Link>
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
              
              <div className="slideshow-container">
                  <Slideshow />
              </div>
          </div>
      </section>
    </>
  );
}

export default Home; 