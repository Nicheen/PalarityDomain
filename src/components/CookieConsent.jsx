import React, { useState, useEffect } from 'react';
import { initGA, logPageView, logEvent } from '../utils/analytics';
import { useLang } from '../i18n/LanguageContext.jsx';
import './CookieConsent.css';

const CookieConsent = () => {
  const { t } = useLang();
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
        <p>{t.cookie.line1}</p>
        <p>{t.cookie.line2}</p>
      </div>
      <div className="cookie-actions">
        <button
          onClick={handleAccept}
          className="cookie-btn accept"
          aria-label={t.cookie.acceptAria}
        >
          {t.cookie.accept}
        </button>
        <button
          onClick={handleDecline}
          className="cookie-btn decline"
          aria-label={t.cookie.declineAria}
        >
          {t.cookie.decline}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;