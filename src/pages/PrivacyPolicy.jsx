import React from 'react';
import '../css/pages/privacy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      <div className="privacy-container">
        <div className="page-header">
          <h1 className="page-title">Integritetspolicy</h1>
          <p className="page-subtitle">Hur vi hanterar dina personuppgifter</p>
          <div className="last-updated">Senast uppdaterad: 19 oktober 2025</div>
        </div>

        <div className="privacy-content">
          <div className="privacy-section">
            <h2>1. Introduktion</h2>
            <p>
              Vi värnar om din integritet. Denna integritetspolicy förklarar hur vi hanterar de uppgifter 
              du lämnar via kontaktformuläret på vår webbplats.
            </p>
          </div>

          <div className="privacy-section">
            <h2>2. Vilka uppgifter vi samlar in</h2>
            <p>
              När du skickar ett meddelande via kontaktformuläret samlar vi endast in den information du själv anger:
            </p>
            <ul>
              <li>Namn</li>
              <li>E-postadress</li>
              <li>Meddelandeinnehåll</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>3. Hur uppgifterna hanteras</h2>
            <p>
              Vi använder tjänsten <strong>Web3Forms</strong> för att skicka formulärdata till vår e-postadress. 
              Vi har ingen egen databas eller backend som lagrar personuppgifter.
            </p>
            <p>
              När du skickar ett meddelande:
            </p>
            <ul>
              <li>Uppgifterna skickas krypterat till Web3Forms</li>
              <li>Web3Forms vidarebefordrar meddelandet till vår e-post</li>
              <li>Uppgifterna sparas inte permanent hos varken oss eller Web3Forms</li>
            </ul>
            <p>
              Läs mer om Web3Forms integritetspolicy på:{" "}
              <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer">
                web3forms.com/privacy
              </a>
            </p>
          </div>

          <div className="privacy-section">
            <h2>4. Lagring och radering</h2>
            <p>
              Eftersom inga uppgifter lagras i någon databas raderas de automatiskt när ärendet hanterats 
              eller e-postmeddelandet tas bort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
