import React from 'react';
import { Link } from 'react-router-dom';

function ActivityCard({ activity }) {
  return (
    <div className="activity-card">
      <h3>{activity.name}</h3>
      <p><strong>Day:</strong> {activity.day}</p>
      <p><strong>Time:</strong> {activity.time}</p>
      <p><strong>Location:</strong> {activity.location}</p>
      <p>{activity.description}</p>
      <Link to={`/activities/${activity.slug}`}>View Details</Link>
    </div>
  );
}

export default ActivityCard; 