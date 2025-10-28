import React, { useEffect } from 'react';
import activities from '../data/activities';
import ActivityCard from '../components/ActivityCard';
import Hero from '../components/Hero';
import Seo from '../components/Seo';

function Activities() {
  useEffect(() => {
    // Handle hash scrolling when page loads
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Seo
        title="Aktiviteter - Skurups KIF"
        description="Upptäck våra aktiviteter för alla åldrar och intressen. Välj något som passar dig och bli en del av vår gemenskap."
        url="https://skurupskif.se/activities"
        image="/social-preview.png"
      />
      <Hero
        title="Upptäck Våra Aktiviteter"
        description="Vi erbjuder en mängd olika aktiviteter för alla åldrar och intressen. Utforska vårt utbud och hitta något som passar dig!"
        primaryButtonText="Se alla aktiviteter"
        primaryButtonLink="#aktiviteter"
        secondaryButtonText="Kontakta oss"
        secondaryButtonLink="/contact"
      />
      <div className="container activities-page" id="aktiviteter">
        <h1 className="section-title" style={{ textAlign: 'center', margin: '40px 0 30px' }}>Våra Aktiviteter</h1>
        <div className="activities-grid">
          {activities.map(activity => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Activities; 