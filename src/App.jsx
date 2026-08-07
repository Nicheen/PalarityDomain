import React, { useState, useEffect, useRef, useCallback } from 'react';
import SocialModal from './components/SocialModal.jsx';
import CookieConsent from './components/CookieConsent.jsx';
import AboutSection from './components/AboutSection.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import LanguageToggle from './components/LanguageToggle.jsx';
import DiscordCTA from './components/DiscordCTA.jsx';
import { useLang } from './i18n/LanguageContext.jsx';
import { logEvent } from './utils/analytics';
import './App.css';

function App() {
  const { t } = useLang();
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
        <div style={{ fontWeight: 'bold', letterSpacing: '0.05em' }}>{t.brand}</div>

        <div className="header-right">
          <LanguageToggle />

          {/* Hamburger + dropdown — wrapped together for outside-click detection */}
          <div ref={menuRef} className="nav-menu">
            <button
              className={`hamburger${isContactOpen ? ' open' : ''}`}
              onClick={() => {
                logEvent('Navigation', 'Toggle Menu', 'Hamburger');
                setIsContactOpen(v => !v);
              }}
              aria-label={t.nav.toggleMenu}
              aria-expanded={isContactOpen}
            >
              <span />
              <span />
              <span />
            </button>

            <SocialModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
          </div>
        </div>
      </div>

      {/* Section indicator dots */}
      <nav className="page-dots" aria-label="Page navigation">
        <button
          className={`page-dot${section === 0 ? ' active' : ''}`}
          onClick={() => goTo(0)}
          aria-label={t.nav.pageHero}
        />
        <button
          className={`page-dot${section === 1 ? ' active' : ''}`}
          onClick={() => goTo(1)}
          aria-label={t.nav.pageAbout}
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
            <p className="event-title">{t.hero.presents}</p>
            <h1 className="game-title">
              <span className="title-level">{t.hero.titleLevel}</span>
              <span className="title-shift">{t.hero.titleShift}</span>
            </h1>
            <DiscordCTA />
          </main>
        </div>

        {/* Page 2 – About + Footer */}
        <div className="page page--about">
          <div id="about-section">
            <AboutSection active={section === 1} />
          </div>
          <div className="footer-wrap">
            <span>{t.footer.copy(new Date().getFullYear())}</span>
            <button className="footer-link" onClick={() => setPage('privacy')}>
              {t.footer.privacy}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
