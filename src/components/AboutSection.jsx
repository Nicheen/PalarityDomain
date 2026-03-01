import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-wrapper">

      <div className="about-bg">
        <div className="about-bg-word about-bg-word--level">LEVEL</div>
        <div className="about-bg-word about-bg-word--shift">SHIFT</div>
      </div>

      <div className="about-container">
        <h2 className="about-title">ABOUT US</h2>

        <div className="about-content">
          <p>
            Palarity was started in October 2025 by two electrical engineers
            from Uppsala University.
          </p>

          <p>
            Before using Godot, we wrote a game engine in C from scratch.
            It taught us a lot about how things work under the hood,
            and that shows in how we make our games.
          </p>

          <p>
            We are making a <strong>precision 2D platformer</strong> with tight controls,
            geometric level design, dash mechanics, and speedrunning.
          </p>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
