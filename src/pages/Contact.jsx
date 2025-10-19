import React from "react";
import "../css/pages/contact.css";
import "../css/components/base.css";
import ContactForm from "../components/ContactForm";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import Seo from '../components/Seo';

const Contact = () => {
  // Add refs for each contact card
  const phoneRef = useScrollAnimation({ threshold: 0.1 });
  const emailRef = useScrollAnimation({ threshold: 0.1 });
  const addressRef = useScrollAnimation({ threshold: 0.1 });
  const hoursRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <main className="main-content">
      <Seo
        title="Kontakta oss - Skurups KIF"
        description="Kontakta Skurups Kultur och Idrottsförening via vårt formulär eller mail."
        url="https://skurups-kif.vercel.app/contact"
        image="/social-preview.png"
      />
      <div className="container">
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h1 className="contact-page-title">Kontaktinformation</h1>
            {/* Email */}
            <div ref={emailRef} className="contact-item fadeIn">
              <div className="contact-icon">
                {/* Email SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-details">
                <h3>E-post</h3>
                <p><a href="mailto:kulturidrottforening@gmail.com">kulturidrottforening@gmail.com</a></p>
              </div>
            </div>
            {/* Address */}
            <div ref={addressRef} className="contact-item fadeIn">
              <div className="contact-icon">
                {/* Address SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Adress</h3>
                <p>
                  <a href="https://maps.google.com/?q=Trägårdsgatan+4,+274+34+Skurup" target="_blank" rel="noopener noreferrer">
                    Trägårdsgatan 4<br />274 34 Skurup
                  </a>
                </p>
              </div>
            </div>
            {/* Opening Hours */}
            <div ref={hoursRef} className="contact-item fadeIn">
              <div className="contact-icon">
                {/* Clock SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Öppettider</h3>
                <p>Aktiviteter enligt schema</p>
                <p className="contact-note"><Link to="/activities">Se aktivitetssidan för detaljer</Link></p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
        {/* Map Section */}
        <div className="map-section">
          <h2>Hitta till oss</h2>
          <p className="map-description">
            Besök oss på{" "}
            <a href="https://maps.google.com/?q=Trägårdsgatan+4,+274+34+Skurup" target="_blank" rel="noopener noreferrer">
              Trägårdsgatan 4, 274 34 Skurup
            </a>
          </p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.0406606575743!2d13.497635175832118!3d55.47938911301833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465381eab800af17%3A0xabef0db891692eaa!2sTr%C3%A4dg%C3%A5rdsgatan%204%2C%20274%2034%20Skurup!5e0!3m2!1sen!2sse!4v1747042459790!5m2!1sen!2sse"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Karta över Skurups KIF:s lokaler"
              aria-label="Interaktiv karta som visar platsen för Skurups Kultur och Idrottsförening"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;