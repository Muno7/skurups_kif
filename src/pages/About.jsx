import React from 'react';
import '../css/pages/about.css';
import '../css/animations.css';
import Hero from '../components/Hero';
import useScrollAnimation from '../hooks/useScrollAnimation';

function About() {
  const cardRef1 = useScrollAnimation({
    threshold: 0.1
  });

  const cardRef2 = useScrollAnimation({
    threshold: 0.1
  });

  const valueCardRef1 = useScrollAnimation({
    threshold: 0.1
  });

  const valueCardRef2 = useScrollAnimation({
    threshold: 0.1
  });

  const valueCardRef3 = useScrollAnimation({
    threshold: 0.1
  });

  return (
    <div className="about-page">
      <Hero 
        title="Lär känna oss"
        description="Kom och upplev allt som Skurups Kultur och Idrottsförening har att erbjuda. Vi ser fram emot att välkomna dig i vår varma och inkluderande miljö!"
        primaryButtonText = "Upptäck vad vi gör"
        primaryButtonLink = "/activities"
        secondaryButtonText = "Kom i kontakt"
        secondaryButtonLink = "/contact"
      />

      <section className="about-content">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Vilka Vi Är & Vår Resa</h2>
            <div className="title-underline"></div>
          </div>
          <div className="about-content-grid">
            <div ref={cardRef1} className="about-content-card fadeIn">
              <h3><span className="about-card-icon">🌱</span>Vår Vision & Grund</h3>
              <p>
                Skurups Kultur och Idrottsförening grundades med visionen att förena kultur och idrott i Skurup. Vi har alltid strävat efter att skapa en inkluderande och stödjande miljö där alla känner sig välkomna och kan växa tillsammans.
              </p>
            </div>
            <div ref={cardRef2} className="about-content-card fadeIn">
              <h3><span className="about-card-icon">🚀</span>Utveckling & Framtid</h3>
              <p>
                Genom åren har vi breddat vårt utbud av aktiviteter och evenemang för alla åldrar. Vårt mål är att fortsätta inspirera och stödja varje individs resa mot personlig utveckling och gemenskap.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Våra Värderingar</h2>
            <div className="title-underline"></div>
          </div>
          <div className="values-grid">
            <div ref={valueCardRef1} className="value-card fadeIn">
              <div className="value-icon">🤝</div>
              <h3>Gemenskap</h3>
              <p>Vi skapar en välkomnande miljö där alla känner sig hemma och kan bygga varaktiga vänskap genom gemensamma intressen.</p>
            </div>
            <div ref={valueCardRef2} className="value-card fadeIn">
              <div className="value-icon">🎯</div>
              <h3>Utveckling</h3>
              <p>Vi stödjer varje individs personliga resa och uppmuntrar kontinuerlig utveckling både inom sport och som person.</p>
            </div>
            <div ref={valueCardRef3} className="value-card fadeIn">
              <div className="value-icon">❤️</div>
              <h3>Respekt</h3>
              <p>Respekt för varandra, för sporten och för våra faciliteter är grundpelaren i allt vi gör tillsammans som förening.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 