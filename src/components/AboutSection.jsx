import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-wrapper">
      <div className="about-container">
        <h2 className="about-header">BUILDING OUR GAME</h2>
        
        <div className="about-content">
          <p className="highlight-text">
            About Us. About Palarity.
          </p>
          
          <p>
            Palarity was founded in October 2025 by two electrical engineers 
            from Uppsala University, looking for a challenge. 
          </p>
          
          <p>
            Our journey began in a low-level C library, building a game engine from scratch. 
            Why? Because we wanted to understand every detail. Now, we've ported that obsession 
            into Godot to build our debut title.
          </p>

          <p>
            We are building a <strong>high-precision 2D action platformer</strong> where every pixel counts. 
            It's a world of geometric chaos, dash mechanics, and stage-based speedrunning. 
            No fluff. Just blocks, bosses, and bombs.
          </p>
        </div>

        {/* Updated Keywords for a Speedrun/Twitch-shooter vibe */}
        <div className="floating-tag tag-1">VELOCITY</div>
        <div className="floating-tag tag-2">PRECISION</div>
      </div>
    </section>
  );
};

export default AboutSection;