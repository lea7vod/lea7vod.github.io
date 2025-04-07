import React, { useEffect } from 'react';
import './App.css';

const Hero = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const particlesJS = window.particlesJS;
      
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#6c5ce7"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            }
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#6c5ce7",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": true,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "repulse": {
              "distance": 100,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            }
          }
        },
        "retina_detect": true
      });
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div id="particles-js" className="particles"></div>
      <div className="hero-content">
        <h1 className="animate-fadeIn">Lea Vodopivec</h1>
        <p className="animate-fadeIn delay-1">
          Digitalni jezikoslovec | Prevajalec
        </p>
        <div className="hero-buttons animate-fadeIn delay-2">
          <button className="btn btn-primary">Poglej moja dela</button>
          <button className="btn btn-outline">Kontaktiraj me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;