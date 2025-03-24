import React from "react";
import "../styles/AboutUs.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          We are a passionate team committed to making a positive impact through music. 
          BeatFlow’s mission is to bring you personalized playlists and help you discover beats that move you.
        </p>
      </div>

      <div className="about-card">
        <h2 className="card-title">Our Mission</h2>
        <p className="card-text">
          To create the best music discovery experience for everyone — 
          making it simple, personal, and inspiring with every beat.
        </p>
      </div>

      <div className="about-card">
        <h2 className="card-title">Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <h3 className="team-name">Mae</h3>
            <p className="team-role">Founder & Developer</p>
          </div>
          <div className="team-card">
            <h3 className="team-name">Sung Jin-Woo</h3>
            <p className="team-role">UI/UX Designer</p>
          </div>
          <div className="team-card">
            <h3 className="team-name">Beru</h3>
            <p className="team-role">Community Manager</p>
          </div>
        </div>
      </div>

      <div className="call-to-action">
        <h2>Join BeatFlow and Feel the Vibes!</h2>
        <p>Music that speaks to you — discover and groove with us.</p>
      </div>
    </div>
  );
}

export default About;
