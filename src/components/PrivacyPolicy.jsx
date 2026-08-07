import React from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import { EMAIL } from '../i18n/translations';
import './PrivacyPolicy.css';

// Split a string on the [[email]] token and inject a mailto link.
function renderText(str, keyPrefix) {
  const parts = str.split('[[email]]');
  return parts.flatMap((chunk, i) =>
    i === 0
      ? [chunk]
      : [
          <a key={`${keyPrefix}-email-${i}`} href={`mailto:${EMAIL}`}>{EMAIL}</a>,
          chunk,
        ]
  );
}

function Block({ block, idx }) {
  if (block.h3) return <h3>{block.h3}</h3>;
  if (block.note) return <p><em>{block.note}</em></p>;
  if (block.p) return <p>{renderText(block.p, `p${idx}`)}</p>;
  if (block.ul) {
    return (
      <ul>
        {block.ul.map((item, i) =>
          typeof item === 'string'
            ? <li key={i}>{item}</li>
            : <li key={i}><strong>{item.b}</strong>{renderText(item.t, `ul${idx}-${i}`)}</li>
        )}
      </ul>
    );
  }
  if (block.ol) {
    return <ol className="pp-toc">{block.ol.map((item, i) => <li key={i}>{item}</li>)}</ol>;
  }
  if (block.table) {
    const { head, rows } = block.table;
    return (
      <div className="pp-table-wrap">
        <table className="pp-table">
          <thead>
            <tr>{head.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r}>{row.map((cell, c) => <td key={c}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (block.address) {
    return (
      <address className="pp-address">
        {block.address.map((line, i) => (
          <React.Fragment key={i}>{line}<br /></React.Fragment>
        ))}
      </address>
    );
  }
  return null;
}

const PrivacyPolicy = ({ onClose }) => {
  const { t } = useLang();
  const p = t.privacy;

  return (
    <div className="pp-page">
      <header className="pp-header">
        <button className="pp-back" onClick={onClose}>
          {p.back}
        </button>
        <span className="pp-brand">{t.brand}</span>
      </header>

      <article className="pp-content">
        <div className="pp-hero">
          <p className="pp-label">{p.label}</p>
          <h1 className="pp-title">{p.title}</h1>
          <p className="pp-date">{p.date}</p>
        </div>

        <div className="pp-body">
          {p.intro.map((block, i) => <Block key={`intro-${i}`} block={block} idx={`intro-${i}`} />)}

          {p.sections.map((section, s) => (
            <section key={s}>
              <h2>{section.h2}</h2>
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} idx={`${s}-${i}`} />
              ))}
            </section>
          ))}

          <p className="pp-generator-note">
            {p.generatorNote.pre}
            <a href="https://termly.io/products/privacy-policy-generator/" target="_blank" rel="noopener noreferrer">
              {p.generatorNote.link}
            </a>
            {p.generatorNote.post}
          </p>
        </div>
      </article>
    </div>
  );
};

export default PrivacyPolicy;
