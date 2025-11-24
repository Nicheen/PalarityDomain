import React, { useState, useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytics';
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
          <strong>Data Collection Protocol:</strong> We use cookies to analyze traffic and optimize the launch sequence.
        </p>
      </div>
      <div className="cookie-actions">
        <button onClick={handleDecline} className="cookie-btn decline">
          Decline
        </button>
        <button onClick={handleAccept} className="cookie-btn accept">
          Initialize
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;