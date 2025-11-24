import React from 'react';
import { initGA, logPageView, logEvent } from '../utils/analytics';
import './SocialModal.css';

// Simple SVG Icons for zero-dependency
const Icons = {
  Steam: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M11.979 0C5.666 0 .548 5.135.548 11.465c0 3.328 1.455 6.32 3.764 8.42l1.83-2.73a4.72 4.72 0 0 1-.58-2.25c0-2.61 2.115-4.725 4.725-4.725 2.61 0 4.725 2.115 4.725 4.725 0 0 1-4.725 4.725c-.24 0-.465-.03-.69-.06l-1.995 2.985a11.43 11.43 0 0 0 4.377.915c6.313 0 11.431-5.135 11.431-11.465C23.41 5.135 18.292 0 11.979 0z"/></svg>,
  Twitter: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  Discord: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="currentColor" d="M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"/>
  </svg>,
  Instagram: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  Email: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
};

const SocialModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Communication Channels</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <div className="social-grid">
          <a 
            href="https://store.steampowered.com" 
            target="_blank" 
            rel="noreferrer" 
            className="social-card"
            onClick={() => logEvent("Social Link", "Click Steam", "Social Modal")}
          >
            <span className="icon">{Icons.Steam}</span>
            <span className="name">Steam</span>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noreferrer" 
            className="social-card"
            onClick={() => logEvent("Social Link", "Click Twitter", "Social Modal")}
          >
            <span className="icon">{Icons.Twitter}</span>
            <span className="name">X / Twitter</span>
          </a>
          <a 
            href="https://discord.gg/UkKRPNJUnu"
            target="_blank"
            rel="noreferrer"
            className="social-card"
            onClick={() => logEvent("Social Link", "Click Discord", "Social Modal")}
          >
            <span className="icon">{Icons.Discord}</span>
            <span className="name">Discord</span>
          </a>
          <a 
            href="https://www.instagram.com/palarity/"
            target="_blank"
            rel="noreferrer"
            className="social-card"
            onClick={() => logEvent("Social Link", "Click Instagram", "Social Modal")}
          >
            <span className="icon">{Icons.Instagram}</span>
            <span className="name">Instagram</span>
          </a>
          <a 
            href="mailto:contact@palarity.dev"
            className="social-card full-width"
            onClick={() => logEvent("Social Link", "Click Email", "Social Modal")}
          >
            <span className="icon">{Icons.Email}</span>
            <span className="name">contact@palarity.dev</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialModal;