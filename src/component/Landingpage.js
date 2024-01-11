// LandingPage.js
import React from 'react';
import './css/Landingpage.css';

const LandingPage = () => {
  return (
    <div id="Home">
    <section className="landing-page">
      <div className="landing-content">
        <h2>Selamat Datang</h2>
        <a href="#"><button className="cta-button">Get Started</button></a>
      </div>
    </section>
    </div>
  );
}

export default LandingPage;
