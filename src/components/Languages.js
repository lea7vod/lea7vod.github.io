import React from 'react';
import './App.css';

const Languages = () => {
  const languages = [
    { name: 'Slovenščina', level: 'C2', native: true },
    { name: 'Srbščina', level: 'C2' },
    { name: 'Hrvaščina', level: 'C2' },
    { name: 'Nemščina', level: 'C1' },
    { name: 'Makedonščina', level: 'B2' },
    { name: 'Angleščina', level: 'B2' },
    { name: 'Italijanščina', level: 'B2' },
  ];

  // Define the levels array here
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  const levelDescriptions = {
    'A1': 'Začetna raven',
    'A2': 'Osnovna raven',
    'B1': 'Raven sporazumevalnega praga',
    'B2': 'Višja raven',
    'C1': 'Napredna raven',
    'C2': 'Mojstrska raven'
  };

  return (
    <section id="languages" className="section languages">
      <h2 className="section-title animate-fadeIn">Jezikovno znanje</h2>
      <div className="languages-container">
        {languages.map((language, index) => (
          <div 
            className={`language-card animate-fadeIn delay-${index % 4 + 1}`}
            key={index}
            data-level={language.level}
          >
            <div className="language-header">
              <span className="language-flag">{language.flag}</span>
              <h3 className="language-name">{language.name}</h3>
              {language.native && <span className="native-badge">Materni jezik</span>}
            </div>
            
            <div className="language-level">
              <span className="level-text">{language.level} - {levelDescriptions[language.level]}</span>
              <div className="progress-container">
                <div 
                  className="progress-bar" 
                  style={{ width: `${(levels.indexOf(language.level) + 1) / 6 * 100}%` }}
                  data-level={language.level}
                ></div>
              </div>
            </div>
            
            <div className="cefr-levels">
              {levels.map((level, i) => (
                <div 
                  key={i} 
                  className={`cefr-level ${i <= levels.indexOf(language.level) ? 'active' : ''}`}
                  data-tooltip={levelDescriptions[level]}
                >
                  {level}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;