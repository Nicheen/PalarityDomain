import React, { useState } from 'react';
import Countdown from './components/Countdown.jsx';
import SocialModal from './components/SocialModal.jsx';
import CookieConsent from './components/CookieConsent.jsx';
import AboutSection from './components/AboutSection.jsx';
import { initGA, logPageView, logEvent } from './utils/analytics';
import './App.css';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="container">

      {/* Analytics Consent Banner */}
      <CookieConsent />

      {/* Social Modal */}
      <SocialModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
      
      {/* Navigation */}
      <div className="header-wrap">
        <div style={{ fontWeight: 'bold', letterSpacing: '0.05em' }}>PALARITY.DEV</div>
        <nav>
          <button 
            className="contact-trigger"
            onClick={() => {
              logEvent("Navigation", "Open Contact Modal", "Header Contact Button");
              setIsContactOpen(true);
            }}
            aria-label="Contact Us"
          >
            <span className="status-dot"></span>
            <span className="contact-text">Contact</span>
          </button>
        </nav>
      </div>

      {/* Main Hero Screen */}
      <main className="content-wrap">
          <p className="event-title">Palarity Presents</p>
          <h1 className="game-title">
            <span className="title-level">Level</span>
            <span className="title-shift">Shift</span>
          </h1>
          <Countdown />
      </main>

      {/* A subtle "Scroll Down" indicator */}
      <div className="scroll-indicator">
        ↓
      </div>

      {/* The New Manifesto Section */}
      <AboutSection />

      {/* Footer */}
      <div className="footer-wrap">
        &copy; {new Date().getFullYear()} Palarity AB. Uppsala, Sweden.
      </div>

    </div>
  );
}

export default App;