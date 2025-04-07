import React from 'react';
import './App.css';

const Education = () => {
  return (
    <section id="education" className="section education">
      <h2 className="section-title animate-fadeIn">Izobrazba</h2>
      <div className="timeline">
        <div className="timeline-item animate-fadeIn delay-1">
          <h3 className="degree-title">Digitalno jezikoslovje</h3>
          <span className="date">10/2024 – Sedanjost</span>
          <p className="institution">
            Magistrski študij, Filozofska fakulteta, Univerza v Ljubljani
          </p>
        </div>
        <div className="timeline-item animate-fadeIn delay-2">
          <h3 className="degree-title">Germanistika in južnoslavistika</h3>
          <span className="date">10/2020 – 05/2024</span>
          <p className="institution">
            Dodiplomski študij, Filozofska fakulteta, Univerza v Ljubljani
          </p>
          <p className="institution">
            dipl. germ. (UN) in dipl. južnoslav. (UN)
          </p>
        </div>
        <div className="timeline-item animate-fadeIn delay-3">
          <h3 className="degree-title">Gimnazijski maturant, tehnik računalništva</h3>
          <span className="date">09/2016 – 06/2020</span>
          <p className="institution">
          Tehniška gimnazija Nova Gorica, smer računalništvo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;