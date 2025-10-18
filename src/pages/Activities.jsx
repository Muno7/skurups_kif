import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import activities from '../data/activities';
import ActivityCard from '../components/ActivityCard';
import Hero from '../components/Hero';

function Activities() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Delay slightly to ensure the DOM is ready
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          // Custom smooth scroll for a slower, eased animation
          const offset = 0; // adjust if you have a fixed header
          const targetY = el.getBoundingClientRect().top + window.pageYOffset - offset;
          const duration = 1200; // milliseconds - increase to make it slower

          const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

          const startY = window.pageYOffset;
          const distance = targetY - startY;
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeInOutQuad(progress);
            window.scrollTo(0, Math.round(startY + distance * eased));
            if (elapsed < duration) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        }
      }, 50);
    }
  }, [location.hash]);

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