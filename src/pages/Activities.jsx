import React from 'react';
import activities from '../data/activities';
import ActivityCard from '../components/ActivityCard';
import Hero from '../components/Hero';

function Activities() {
  return (
    <>
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