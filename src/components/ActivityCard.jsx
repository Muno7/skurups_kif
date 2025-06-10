import React from 'react';
import { Link } from 'react-router-dom';
import '../css/pages/home/activities.css';

function ActivityCard({ activity }) {
  return (
    <div className="activity-card">
      <div className="card-image-container">
        <img src={activity.imageUrl} alt={activity.name} className="card-image" />
        <div className="image-overlay">
          <span className="view-activity">Visa aktivitet</span>
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