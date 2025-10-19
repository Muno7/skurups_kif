import React, { useState } from "react";
import Swal from 'sweetalert2'
import "../css/pages/contact.css";
import "../css/components/base.css";
import { Link } from "react-router-dom";

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
      event.target.reset();
      setCharCount(0);
      Swal.fire({
        title: 'Tack!',
        text: 'Ditt meddelande har skickats.',
        icon: 'success',
        confirmButtonText: 'Stäng'
      })
    } else {
      Swal.fire({
        title: 'Ett fel uppstod',
        text: 'Meddelandet kunde inte skickas. Försök igen eller kontakta oss direkt.',
        icon: 'error',
        confirmButtonText: 'Stäng'
      })
    }
  };

  return (
    <div className="contact-form">
      <h2>Skicka meddelande</h2>
      <form className="form" method="POST" onSubmit={onSubmit}>
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
          <label>
            <input type="checkbox" id="consent" name="consent" required aria-describedby="consent-error" />
            <span>
              Jag godkänner att mina uppgifter behandlas enligt <Link to="/privacy">integritetspolicyn</Link> *
            </span>
          </label>
          <div className="error-message" id="consent-error"></div>
        </div>
        <button type="submit" className="btn" id="submitBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L2 8.5l9.5 3.5L15 21z"></path>
          </svg>
          <span className="btn-text">Skicka meddelande</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 