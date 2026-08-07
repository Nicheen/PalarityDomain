import React from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import { logEvent } from '../utils/analytics';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { lang, setLang, t } = useLang();

  const choose = (next) => {
    if (next === lang) return;
    setLang(next);
    logEvent('Navigation', 'Change Language', next.toUpperCase());
  };

  return (
    <div className="lang-toggle" role="group" aria-label={t.nav.langLabel}>
      <button
        className={`lang-opt${lang === 'en' ? ' active' : ''}`}
        onClick={() => choose('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <span className="lang-sep" aria-hidden="true">|</span>
      <button
        className={`lang-opt${lang === 'sv' ? ' active' : ''}`}
        onClick={() => choose('sv')}
        aria-pressed={lang === 'sv'}
      >
        SV
      </button>
    </div>
  );
};

export default LanguageToggle;
