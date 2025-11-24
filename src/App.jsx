import React, { useState } from 'react';
import Countdown from './components/Countdown.jsx';
import SocialModal from './components/SocialModal.jsx';
import CookieConsent from './components/CookieConsent.jsx';
import { initGA, logPageView, logEvent } from './utils/analytics';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);

  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    logEvent("Subscription", "Submit Email", "Notify Me Button");

    console.log(`Subscribing: ${email}`);
    
    setEmail('');
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

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
            onClick={() => {
              logEvent("Navigation", "Open Contact Modal", "Header Contact Button");
              setIsContactOpen(true);
            }}
            style={{ 
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#fff', 
              textDecoration: 'none', 
              opacity: 0.7, 
              fontSize: '0.9rem',
              fontFamily: 'inherit'
            }}
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Centered Content */}
      <main className="content-wrap">
        <h1 className="event-title">
          Summer Sale 2026
        </h1>
        
        <Countdown />
        
        {/* Subscription Form */}
        <form className="subscribe-form" onSubmit={handleSubscribe}>
          <input 
            type="email" 
            placeholder="Enter your email..." 
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">
            Notify Me
          </button>
        </form>

        <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#444' }}>
          Join the waitlist. No spam. We respect your privacy.
        </p>
      </main>

      {/* Footer */}
      <div className="footer-wrap">
        &copy; {new Date().getFullYear()} Palarity AB. Uppsala, Sweden.
      </div>

      {/* Custom Toast Notification */}
      <div className={`toast ${showToast ? 'active' : ''}`}>
        <div className="toast-content">
          <div className="toast-icon-box">
            ✓
          </div>
          <div className="toast-text">
            <h4>Registration Complete</h4>
            <p>You'll receive an email when we go live.</p>
          </div>
        </div>
        {/* The line that shrinks/grows */}
        <div className="toast-progress"></div>
      </div>
    </div>
  );
}

export default App;