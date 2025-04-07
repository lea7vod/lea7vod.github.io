import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#about" className="footer-link">O meni</a>
          <a href="#education" className="footer-link">Izobrazba</a>
          <a href="#experience" className="footer-link">Izkušnje</a>
          <a href="#languages" className="footer-link">Jeziki</a>
          <a href="#skills" className="footer-link">Znanja</a>
          <a href="#contact" className="footer-link">Kontakt</a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Lea Vodopivec. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;