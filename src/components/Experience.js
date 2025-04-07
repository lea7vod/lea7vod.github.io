import React from 'react';
import './App.css';
import megabon from './assets/megabon.png';
import futunatura from './assets/logo-futu-natura.svg';
import mpg from './assets/mpg.png';

const Experience = () => {
  const experienceItems = [
    {
      title: 'SAMOSTOJNI PREVAJALEC',
      date: '2021 – Sedanjost',
      description: [
        'Prevajanje literarnih besedil (predvsem makedonske in srbske poezije in proze)',
        'Prevajanje tehničnih besedil (priročniki, akademska besedila, področje računalništva, mehatronike in elektrotehnike) v jezikovni kombinaciji slovenščina, nemščina in hrvaščina',
        'Lektoriranje in jezikovno svetovanje',
        'Individualne inštrukcije'
      ],
      color: 'rgba(108, 92, 231, 0.9)'
    },
    {
      title: 'PREVAJALEC',
      company: 'Moderna Ventures SA, Megabon.eu',
      date: '09/2023 – Sedanjost',
      description: [
        'Priprava in prevajanje turističnih ponudb v adminu (jezikovne kombinacije slovenščina, hrvaščina, srbščina, črnogorščina in bosanščina)',
        'Priprava in prevajanje mailingov',
        'Grafično oblikovanje v Canvi',
        'Vodenje projektov in upravljanje nalog v Asani',
        'Marketing ekipa'
      ],
      color: 'rgba(0, 206, 201, 0.9)',
      logo: megabon
    },
    {
      title: 'PREVAJALEC',
      company: 'Be Healthy d.o.o., FutuNatura',
      date: '08/2021 – 11/2024',
      description: [
        'Prevajanje opisov izdelkov in deklaracij (prehranska dopolnila in športni dodatki) iz slovenščine v nemščino',
        'Prevajanje besedil za mailinge in oglaševanje iz slovenščine v nemščino',
        'Urejanje in oblikovanje spletne strani'
      ],
      color: 'rgba(155, 89, 182, 0.9)',
      logo: futunatura
    },
    {
      title: 'PROMOTOR, HOSTESNO DELO',
      company: 'MPG Plus marketing agency d.o.o.',
      date: '02/2021 – 10/2023',
      description: [
        'Promocija izdelkov v barih in nakupovalnih centrih (degustacija izdelkov, sodelovanje v nagradnih igrah)',
        'Hostesno delo na raznih dogodkih (usmerjanje gostov, pregledovanje vstopnic)'
      ],
      color: 'rgba(233, 30, 99, 0.9)',
      logo: mpg
    }
  ];

  return (
    <section id="experience" className="section experience">
      <h2 className="section-title animate-fadeIn">Delovne izkušnje</h2>
      <div className="experience-grid">
        {experienceItems.map((item, index) => (
          <div className={`experience-card animate-fadeIn delay-${index + 1}`} key={index}>
            <div className="card-front">
              <div className="card-header">
                <h3>{item.title}</h3>
                <p className="company">{item.company}</p>
                <p className="date">{item.date}</p>
              </div>
            </div>
            <div className="card-back" style={{ background: item.color }}>
              <ul>
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              {item.logo && (
                <div className="company-logo-container">
                  <img src={item.logo} alt="Company Logo" className="company-logo" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;