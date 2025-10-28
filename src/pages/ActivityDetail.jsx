import { useParams, Link } from 'react-router-dom';
import { Clock, MapPin, Users, Share2, ArrowLeft } from 'lucide-react';
import activities from '../data/activities';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../css/pages/activityDetail.css';
import '../css/animations.css';
import Seo from '../components/Seo';

function ActivityDetail() {
  const { slug } = useParams();
  const activity = activities.find(a => a.slug === slug);
  
  // Animation refs
  const heroRef = useScrollAnimation({ threshold: 0.1 });
  const contentCardRef = useScrollAnimation({ threshold: 0.1 });

  if (!activity) {
    return (
      <div className="container" style={{ padding: '40px 0', textAlign: 'center' }}>
        <h1 className="section-title">Aktivitet hittades inte</h1>
        <p>Vi kunde tyvärr inte hitta den aktivitet du letade efter.</p>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: activity.name,
        text: activity.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const formatTime = (act) => {
    const dayPattern = /(Måndag|Tisdag|Onsdag|Torsdag|Fredag|Lördag|Söndag|Mån|Tis|Ons|Tor|Fre|Lör|Sön)/i;
    return dayPattern.test(act.time) ? act.time : `${act.day} ${act.time}`;
  };

  return (
    <div className="activity-detail">
      <Seo
        title={`${activity.name} - Skurups KIF`}
        description={activity.description}
        url={`https://skurupskif.se/activities/${activity.slug}`}
        image={activity.imageUrl}
        jsonLd={{
            "@context": "https://schema.org",
            "@type": "Activity",
            "name": activity.name,
            "description": activity.description,
            "url": `https://skurupskif.se/activities/${activity.slug}`,
            "image": `https://skurupskif.se/${activity.imageUrl}`,
            "location": {
                "@type": "Place",
                "name": activity.location
            },
            "organizer": {
                "@type": "Organization",
                "name": "Skurups Kultur och Idrottsförening",
                "url": "https://skurupskif.se/"
            }
        }}
      />
      {/* Header Section */}
      <div
        className="activitydetail-hero"
        style={{ backgroundImage: `url(${activity.imageUrl})` }}
      >
        <div className="activitydetail-hero-overlay"></div>
        <div className="activitydetail-back-hero">
          <Link to="/activities#aktiviteter" className="btn btn-secondary">
            <ArrowLeft size={18} />
            Tillbaka
          </Link>
        </div>
        <div className="container">
          <div ref={heroRef} className="activitydetail-hero-content fadeIn">
            <div className="activitydetail-hero-center-content">
              <h1 className="activitydetail-hero-title">{activity.name}</h1>
              <p className="activitydetail-hero-description">{activity.description}</p>
              <div className="action-buttons">
                <button
                  className="action-button"
                  onClick={handleShare}
                >
                  <Share2 size={16} />
                  Dela
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="content-section">
        {/* Quick Info Cards */}
        <div className="info-cards">
          <div className="info-card">
            <div className="info-icon">
              <Clock size={20} />
            </div>
            <div>
              <p className="info-label">Tid</p>
              <p className="info-value">{formatTime(activity)}</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <MapPin size={20} />
            </div>
            <div>
              <p className="info-label">Plats</p>
              <p className="info-value">{activity.location}</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <Users size={20} />
            </div>
            <div>
              <p className="info-label">Ålder</p>
              <p className="info-value">{activity.age}</p>
            </div>
          </div>
        </div>
        {/* About Section */}
        <div ref={contentCardRef} className="content-card fadeIn">
          <h2 className="content-title">Om aktiviteten</h2>
          <p className="content-description">
            {activity.details}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivityDetail; 