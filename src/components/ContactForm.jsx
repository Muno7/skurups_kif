import React, { useState } from "react";
import "../css/pages/contact.css";
import "../css/components/base.css";

const ContactForm = () => {
  const [charCount, setCharCount] = useState(0);
  // You can add more state for form fields if you want to handle them in React

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "53733e03-a0ec-4518-b124-bee4de78f999");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="contact-form">
      <h2>Skicka meddelande</h2>
      <form className="form" method="POST" onSubmit={onSubmit}>
        <input type="hidden" name="formType" value="contact" />
        <input type="hidden" name="timestamp" id="timestamp" />
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">Förnamn *</label>
            <input type="text" id="firstName" name="firstName" className="form-control" required autoComplete="given-name" aria-describedby="firstName-error" />
            <div className="error-message" id="firstName-error"></div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">Efternamn *</label>
            <input type="text" id="lastName" name="lastName" className="form-control" required autoComplete="family-name" aria-describedby="lastName-error" />
            <div className="error-message" id="lastName-error"></div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email" className="form-label">E-postadress *</label>
            <input type="email" id="email" name="email" className="form-control" required autoComplete="email" aria-describedby="email-error" />
            <div className="error-message" id="email-error"></div>
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Telefonnummer</label>
            <input type="tel" id="phone" name="phone" className="form-control" autoComplete="tel" placeholder="070-123 45 67" aria-describedby="phone-error" />
            <div className="error-message" id="phone-error"></div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject" className="form-label">Ämne *</label>
          <select id="subject" name="subject" className="form-control" required aria-describedby="subject-error">
            <option value="">Välj ämne...</option>
            <option value="membership">Fråga om medlemskap</option>
            <option value="activities">Fråga om aktiviteter</option>
            <option value="english-kids">Engelska för barn</option>
            <option value="arabic-kids">Arabiska för barn</option>
            <option value="sewing">Sömnad & Handarbete</option>
            <option value="karate">Karate</option>
            <option value="events">Evenemang</option>
            <option value="other">Övrigt</option>
          </select>
          <div className="error-message" id="subject-error"></div>
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Meddelande *</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="6"
            required
            placeholder="Berätta om din fråga eller hur vi kan hjälpa dig..."
            aria-describedby="message-error"
            maxLength={1000}
            onChange={e => setCharCount(e.target.value.length)}
          ></textarea>
          <div className="character-count">
            <span id="charCount">{charCount}</span>/1000 tecken
          </div>
          <div className="error-message" id="message-error"></div>
        </div>
        <div className="form-group">
          <label className="checkbox-container">
            <input type="checkbox" id="consent" name="consent" required aria-describedby="consent-error" />
            <span className="checkmark"></span>
            <span className="checkbox-text">
              Jag godkänner att mina uppgifter behandlas enligt
              <a href="/integritetspolicy" target="_blank" rel="noopener noreferrer"> integritetspolicyn</a> *
            </span>
          </label>
          <div className="error-message" id="consent-error"></div>
        </div>
        <button type="submit" className="btn btn-primary" id="submitBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L2 8.5l9.5 3.5L15 21z"></path>
          </svg>
          <span className="btn-text">Skicka meddelande</span>
          <div className="btn-loading" style={{ display: "none" }}>
            <div className="spinner"></div>
            Skickar...
          </div>
        </button>
      </form>
      {/* Success/Error Messages */}
      <div className="form-message success-message" id="successMessage" style={{ display: "none" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22,4 12,14.01 9,11.01"></polyline>
        </svg>
        <div>
          <h3>Tack för ditt meddelande!</h3>
          <p>Vi har mottagit din förfrågan och återkommer inom 24 timmar.</p>
        </div>
      </div>
      <div className="form-message error-message-box" id="errorMessage" style={{ display: "none" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
        <div>
          <h3>Ett fel uppstod</h3>
          <p>Meddelandet kunde inte skickas. Försök igen eller kontakta oss direkt.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 