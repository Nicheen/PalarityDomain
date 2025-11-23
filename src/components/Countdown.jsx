import React, { useState, useEffect } from 'react';
import './Countdown.css';

const TARGET_DATE = new Date('June 26, 2026 18:00:00').getTime();

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = TARGET_DATE - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper to pad numbers with 0 (e.g., 5 -> 05)
  const pad = (num) => String(num).padStart(2, '0');

  return (
    <div className="countdown-wrapper">
      <div className="time-segment">
        <span className="time-value">{pad(timeLeft.days)}</span>
        <span className="time-label">DAYS</span>
      </div>
      <span className="separator">:</span>
      <div className="time-segment">
        <span className="time-value">{pad(timeLeft.hours)}</span>
        <span className="time-label">HOURS</span>
      </div>
      <span className="separator">:</span>
      <div className="time-segment">
        <span className="time-value">{pad(timeLeft.minutes)}</span>
        <span className="time-label">MIN</span>
      </div>
      <span className="separator">:</span>
      <div className="time-segment">
        <span className="time-value">{pad(timeLeft.seconds)}</span>
        <span className="time-label">SEC</span>
      </div>
    </div>
  );
};

export default Countdown;