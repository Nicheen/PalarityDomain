import React, { useState, useEffect } from 'react';
import { initGA, logPageView, logEvent } from '../utils/analytics';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('palarity_cookie_consent');
    
    if (consent === 'granted') {
      // User previously accepted, start tracking immediately
      initGA();
      logPageView();
    } else if (!consent) {
      // No choice made yet, show banner
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('palarity_cookie_consent', 'granted');
    initGA();
    logPageView();
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('palarity_cookie_consent', 'denied');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          We use cookies to analyze website traffic and improve your experience.
        </p><p>
          No personal data is collected without your consent.
        </p>
      </div>
      <div className="cookie-actions">
        <button 
          onClick={handleAccept}
          className="cookie-btn accept"
          aria-label="Accept analytics cookies"
        >
          Accept
        </button>
        <button 
          onClick={handleDecline}
          className="cookie-btn decline"
          aria-label="Decline analytics cookies"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;