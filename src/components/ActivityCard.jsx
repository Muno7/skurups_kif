import React from 'react';
import { Link } from 'react-router-dom';
import '../css/pages/home/activities.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

function ActivityCard({ activity }) {
  const cardRef = useScrollAnimation({
    threshold: 0.1
  });

  return (
    <div ref={cardRef} className="activity-card fadeIn">
      <div className="card-image-container">
        <img src={activity.imageUrl} alt={activity.name} className="card-image" />
        <div className="image-overlay">
        <Link to={`/activities/${activity.slug}`} className="view-activity">Visa aktivitet</Link>
        </div>
      </div>
      <div className="card-content">
        <h3 className="activity-title">{activity.name}</h3>
        <p className="activity-description">{activity.description}</p>
        <Link to={`/activities/${activity.slug}`} className="read-more">
          Läs mer 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default ActivityCard; 