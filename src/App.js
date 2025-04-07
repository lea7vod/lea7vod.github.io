import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './components/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Languages />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;