import React, { useState, useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import './AboutSection.css';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const AboutSection = ({ active }) => {
  const { t } = useLang();
  const [p1, p2, p3] = t.about.paragraphs;
  const fullTitle = t.about.title;
  const [typed, setTyped] = useState('');

  // Typewriter the title whenever the section becomes active; reset on exit
  // so it replays each time you scroll back in.
  useEffect(() => {
    if (!active) {
      const id = setTimeout(() => setTyped(''), 0);
      return () => clearTimeout(id);
    }
    if (prefersReducedMotion()) {
      const id = setTimeout(() => setTyped(fullTitle), 0);
      return () => clearTimeout(id);
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(fullTitle.slice(0, i));
      if (i >= fullTitle.length) clearInterval(id);
    }, 95);
    return () => clearInterval(id);
  }, [active, fullTitle]);

  return (
    <section className="about-wrapper">

      <div className="about-bg">
        <div className="about-bg-word about-bg-word--level">LEVEL</div>
        <div className="about-bg-word about-bg-word--shift">SHIFT</div>
      </div>

      <div className="about-container">
        <h2 className="about-title" aria-label={fullTitle}>
          <span aria-hidden="true">{typed}</span>
        </h2>

        <div className={`about-content${active ? ' in' : ''}`}>
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3.pre}<strong>{p3.strong}</strong>{p3.post}</p>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
