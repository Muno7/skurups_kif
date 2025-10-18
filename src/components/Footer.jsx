import React from 'react';
import { Link } from 'react-router-dom';
import skifLogo from '../assets/logo/skif_logo.png';
import activities from '../data/activities';
import '../css/components/footer.css';

function Footer() {
  return (
    <footer className="site-footer">
        <div className="footer-top">
            <div className="container">
                <div className="footer-grid">
                    {/* Logo and About */}
                    <div className="footer-column footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src={skifLogo} alt="Skurups KIF Logo" className="footer-logo-img"/>
                            <span className="footer-logo-text">SKURUPS KIF</span>
                        </Link>
                        <p className="footer-about">Skurups Kultur och Idrottsförening erbjuder aktiviteter för alla åldrar och intressen. Vi strävar efter att skapa en inkluderande gemenskap där alla kan utvecklas.</p>
                        <div className="footer-social-container">
                            <span className="social-text">Följ oss:</span>
                            <div className="footer-social">
                                <a href="#" className="social-link" aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                    <span className="social-name">Facebook</span>
                                </a>
                                <a href="#" className="social-link" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    <span className="social-name">Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-heading">Snabblänkar</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Hem</Link></li>
                            <li><Link to="/activities">Aktiviteter</Link></li>
                            <li><Link to="/about">Om oss</Link></li>
                            <li><Link to="/contact">Kontakt</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-heading">Aktiviteter</h3>
                        <ul className="footer-links">
                            {activities.slice(0, 4).map(activity => (
                                <li key={activity.id}>
                                    <Link to={`/activities/${activity.slug}`}>
                                        {activity.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-column footer-contact-column">
                        <h3 className="footer-heading">Kontakta oss</h3>
                        <ul className="footer-contact">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <a href="tel:+46411123456">0411-123 456</a>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <a href="mailto:kulturidrottforening@gmail.com">kulturidrottforening@gmail.com</a>
                            </li>
                        </ul>
                        {/* Map Frame */}
                        <div className="footer-map-container">
                            <p className="map-address">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <a href="https://maps.google.com/?q=Trägårdsgatan+4,+274+34+Skurup" target="_blank" rel="noopener noreferrer">
                                    Trägårdsgatan 4, 274 34 Skurup
                                </a>
                            </p>
                            <div className="footer-map-frame">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.0406606575743!2d13.497635175832118!3d55.47938911301833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465381eab800af17%3A0xabef0db891692eaa!2sTr%C3%A4dg%C3%A5rdsgatan%204%2C%20274%2034%20Skurup!5e0!3m2!1sen!2sse!4v1747042459790!5m2!1sen!2sse" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <p className="copyright">&copy; 2025 Skurups Kultur och Idrottsförening. Alla rättigheter förbehållna.</p>
                <div className="footer-bottom-links">
                    <a href="#">Integritetspolicy</a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer; 