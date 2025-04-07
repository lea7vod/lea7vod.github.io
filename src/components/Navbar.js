import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active link based on scroll position
      const sections = ['home', 'about', 'education', 'experience', 'languages', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link 
          to="home" 
          smooth={true} 
          duration={800} 
          className="navbar-logo"
          onClick={closeMobileMenu}
        >
          <span className="logo-text">LV</span>
          <span className="logo-dot"></span>
        </Link>

        {/* Mobile Menu Button */}
        <div 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
        >
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {[
            { id: 'about', label: 'O meni' },
            { id: 'education', label: 'Izobraževanje' },
            { id: 'experience', label: 'Izkušnje' },
            { id: 'languages', label: 'Jeziki' },
            { id: 'skills', label: 'Znanja' },
            { id: 'contact', label: 'Kontakt' }
          ].map((item) => (
            <li className="navbar-item" key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={800}
                className={`navbar-link ${activeLink === item.id ? 'active' : ''}`}
                onClick={closeMobileMenu}
                spy={true}
              >
                <span className="link-text">{item.label}</span>
                <span className="link-underline"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle (Optional) */}
        <div className="theme-toggle">
          <button className="theme-btn">
            <i className="fas fa-moon"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;