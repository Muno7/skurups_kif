import React, { useState, useRef } from "react";
import Swal from 'sweetalert2'
import "../css/pages/contact.css";
import "../css/components/base.css";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [charCount, setCharCount] = useState(0);
  const [errors, setErrors] = useState({});
  const refs = useRef({});
  // You can add more state for form fields if you want to handle them in React

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // perform submit-time validation
    const validationErrors = {};
    const firstName = formData.get("firstName")?.toString().trim();
    const lastName = formData.get("lastName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const consent = formData.get("consent");

    if (!firstName) validationErrors.firstName = "Ange ditt förnamn";
    if (!lastName) validationErrors.lastName = "Ange ditt efternamn";
    if (!email) validationErrors.email = "Ange din e-postadress";
    else {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) validationErrors.email = "Ange en giltig e-postadress";
    }
    if (!message) validationErrors.message = "Skriv ett meddelande";
    if (!consent) validationErrors.consent = "Du måste godkänna integritetspolicyn";

    // optional: simple phone validation when provided
    if (phone) {
      const phoneDigits = phone.replace(/[^0-9]/g, "");
      if (phoneDigits.length < 7) validationErrors.phone = "Ange ett giltigt telefonnummer";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // focus & scroll first error
      const firstKey = Object.keys(validationErrors)[0];
      const el = refs.current[firstKey];
      if (el && typeof el.focus === 'function') {
        el.focus();
        try {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } catch (e) {
          // ignore scroll errors on older browsers
        }
      }
      return;
    }

    // proceed with API submit
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
      form.reset();
      setCharCount(0);
      setErrors({});
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
      <form className="form" method="POST" onSubmit={onSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">Förnamn *</label>
            <input
              ref={(el) => (refs.current.firstName = el)}
              type="text"
              id="firstName"
              name="firstName"
              className={`form-control ${errors.firstName ? 'input-error' : ''}`}
              autoComplete="given-name"
              aria-describedby="firstName-error"
              aria-invalid={!!errors.firstName}
              onChange={() => { if (errors.firstName) setErrors(prev => ({ ...prev, firstName: undefined })); }}
            />
            <div className="error-message" id="firstName-error">{errors.firstName}</div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">Efternamn *</label>
            <input
              ref={(el) => (refs.current.lastName = el)}
              type="text"
              id="lastName"
              name="lastName"
              className={`form-control ${errors.lastName ? 'input-error' : ''}`}
              autoComplete="family-name"
              aria-describedby="lastName-error"
              aria-invalid={!!errors.lastName}
              onChange={() => { if (errors.lastName) setErrors(prev => ({ ...prev, lastName: undefined })); }}
            />
            <div className="error-message" id="lastName-error">{errors.lastName}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email" className="form-label">E-postadress *</label>
            <input
              ref={(el) => (refs.current.email = el)}
              type="email"
              id="email"
              name="email"
              className={`form-control ${errors.email ? 'input-error' : ''}`}
              autoComplete="email"
              aria-describedby="email-error"
              aria-invalid={!!errors.email}
              onChange={() => { if (errors.email) setErrors(prev => ({ ...prev, email: undefined })); }}
            />
            <div className="error-message" id="email-error">{errors.email}</div>
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Telefonnummer</label>
            <input
              ref={(el) => (refs.current.phone = el)}
              type="tel"
              id="phone"
              name="phone"
              className={`form-control ${errors.phone ? 'input-error' : ''}`}
              autoComplete="tel"
              placeholder="070-123 45 67"
              aria-describedby="phone-error"
              aria-invalid={!!errors.phone}
              onChange={() => { if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined })); }}
            />
            <div className="error-message" id="phone-error">{errors.phone}</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Meddelande *</label>
          <textarea
            ref={(el) => (refs.current.message = el)}
            id="message"
            name="message"
            className={`form-control ${errors.message ? 'input-error' : ''}`}
            rows="6"
            placeholder="Berätta om din fråga eller hur vi kan hjälpa dig..."
            aria-describedby="message-error"
            maxLength={1000}
            onChange={e => { setCharCount(e.target.value.length); if (errors.message) setErrors(prev => ({ ...prev, message: undefined })); }}
          ></textarea>
          <div className="character-count">
            <span id="charCount">{charCount}</span>/1000 tecken
          </div>
          <div className="error-message" id="message-error">{errors.message}</div>
        </div>
        <div className="form-group">
          <label>
            <input
              ref={(el) => (refs.current.consent = el)}
              type="checkbox"
              id="consent"
              name="consent"
              aria-describedby="consent-error"
              aria-invalid={!!errors.consent}
              onChange={() => { if (errors.consent) setErrors(prev => ({ ...prev, consent: undefined })); }}
            />
            <span>
              Jag godkänner att mina uppgifter behandlas enligt <Link to="/privacy">integritetspolicyn</Link> *
            </span>
          </label>
          <div className="error-message" id="consent-error">{errors.consent}</div>
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