import React, { useState, useEffect, useRef, useCallback } from 'react';
import Countdown from './components/Countdown.jsx';
import SocialModal from './components/SocialModal.jsx';
import CookieConsent from './components/CookieConsent.jsx';
import AboutSection from './components/AboutSection.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import { logEvent } from './utils/analytics';
import './App.css';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [page, setPage] = useState('home');
  const [section, setSection] = useState(0);
  const locked = useRef(false);
  const touchStartY = useRef(0);
  const menuRef = useRef(null);

  // Lock scroll on home (slider), unlock on other pages
  useEffect(() => {
    document.documentElement.classList.toggle('scroll-lock', page === 'home');
  }, [page]);

  // Close menu on outside click
  useEffect(() => {
    if (!isContactOpen) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [isContactOpen]);

  const goTo = useCallback((idx) => {
    if (locked.current) return;
    locked.current = true;
    setSection(idx);
    setTimeout(() => { locked.current = false; }, 1000);
  }, []);

  useEffect(() => {
    if (page !== 'home') return;

    const onWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 30 && section === 0) goTo(1);
      else if (e.deltaY < -30 && section === 1) goTo(0);
    };

    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      const dy = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(dy) < 60) return;
      if (dy > 0 && section === 0) goTo(1);
      else if (dy < 0 && section === 1) goTo(0);
    };

    const onKeyDown = (e) => {
      if (e.key === 'ArrowDown' && section === 0) goTo(1);
      else if (e.key === 'ArrowUp' && section === 1) goTo(0);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [section, goTo, page]);

  if (page === 'privacy') {
    return <PrivacyPolicy onClose={() => setPage('home')} />;
  }

  return (
    <div className="container">
      <CookieConsent />

      {/* Fixed header */}
      <div className="header-wrap">
        <div style={{ fontWeight: 'bold', letterSpacing: '0.05em' }}>PALARITY.DEV</div>

        {/* Hamburger + dropdown — wrapped together for outside-click detection */}
        <div ref={menuRef} className="nav-menu">
          <button
            className={`hamburger${isContactOpen ? ' open' : ''}`}
            onClick={() => {
              logEvent('Navigation', 'Toggle Menu', 'Hamburger');
              setIsContactOpen(v => !v);
            }}
            aria-label="Toggle menu"
            aria-expanded={isContactOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <SocialModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </div>
      </div>

      {/* Section indicator dots */}
      <nav className="page-dots" aria-label="Page navigation">
        <button
          className={`page-dot${section === 0 ? ' active' : ''}`}
          onClick={() => goTo(0)}
          aria-label="Go to hero"
        />
        <button
          className={`page-dot${section === 1 ? ' active' : ''}`}
          onClick={() => goTo(1)}
          aria-label="Go to about"
        />
      </nav>

      {/* Full-page slider */}
      <div
        className="pages-slider"
        style={{ transform: `translateY(-${section * 100}vh)` }}
      >
        {/* Page 1 – Hero */}
        <div className="page">
          <main className="content-wrap">
            <p className="event-title">Palarity Presents</p>
            <h1 className="game-title">
              <span className="title-level">Level</span>
              <span className="title-shift">Shift</span>
            </h1>
            <Countdown />
          </main>
        </div>

        {/* Page 2 – About + Footer */}
        <div className="page page--about">
          <div id="about-section">
            <AboutSection />
          </div>
          <div className="footer-wrap">
            <span>&copy; {new Date().getFullYear()} Palarity AB. Uppsala, Sweden.</span>
            <button className="footer-link" onClick={() => setPage('privacy')}>
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
