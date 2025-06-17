import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import ActivityCard from '../components/ActivityCard';
import activities from '../data/activities';
import Hero from '../components/Hero';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Home() {
  // Use the custom hook for each animatable section (activities, slideshow, view all)
  const slideshowRef = useScrollAnimation({
    threshold: 0.1
  });

  return (
    <>
      <Hero 
        title={<span>Välkommen till<br /><span className="text-accent">Skurups Kultur och Idrottsförening</span></span>}
        description="Kom och upplev allt som Skurups Kultur och Idrottsförening har att erbjuda. Vi ser fram emot att välkomna dig i vår varma och inkluderande miljö!"
        primaryButtonText = "Utforska Aktiviteter"
        primaryButtonLink = "/activities"
        secondaryButtonText = "Kontakta Oss"
        secondaryButtonLink = "/contact"
      />

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