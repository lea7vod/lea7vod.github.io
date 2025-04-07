import React from 'react';
import './App.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title animate-fadeIn">O meni</h2>
      <div className="about-content animate-fadeIn delay-1">
        <div className="about-text">
          <p>
            Sem magistrska študentka programa digitalno jezikoslovje z diplomo iz germanistike in južnoslavistike.
            Ukvarjam se s prevajanjem, digitalno analizo besedil in umetno inteligenco.
            Navdušujejo me jezikovne tehnologije, korpusna analiza in njihova uporaba v humanistiki.
          </p>
          <p>
            Moje interdisciplinarno znanje združuje jezikovno strokovnost in tehnične veščine,
            kar mi omogoča, da premostim vrzel med humanistiko in tehnologijo.
          </p>
        </div>
        <div className="about-image">
          {/* Replace with your image */}
          <div style={{
            width: '100%',
            height: '400px',
            background: 'linear-gradient(145deg, #4361ee, #3a0ca3)',
            borderRadius: '10px'
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default About;