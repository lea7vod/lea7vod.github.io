import React from 'react';
import './App.css';

const Skills = () => {
  const skillsCategories = [
    {
      title: 'Splošna digitalna znanja',
      icon: 'fas fa-laptop-code',
      skills: [
        'Microsoft Office (Word, Excel, PowerPoint, Outlook)',
        'Google Workspace (Docs, Sheets, Slides, Drive, Gmail)',
        'Storitve v oblaku (Google Drive, Dropbox, OneDrive)',
        'Vodenje projektov in upravljanje nalog (Asana)',
        'Grafično oblikovanje (Canva)'
      ]
    },
    {
      title: 'Računalniško podprto prevajanje',
      icon: 'fas fa-language',
      skills: [
        'SDL Trados Studio',
        'MemoQ',
        'Prevajalski formati (XML, TMX, XLIFF)',
      ]
    },
    {
      title: 'Programski jeziki',
      icon: 'fas fa-code',
      skills: [
        'Python',
        'JavaScript',
        'CSS, HTML, PHP (spletne strani)',
        'XML (strukturirani podatki)',
        'R (statistika in vizualizacija podatkov)'
      ]
    },
    {
      title: 'Digitalna humanistika',
      icon: 'fas fa-brain',
      skills: [
        'Korpusna analiza (Sketch Engine)',
        'Python knjižnice za UI (PyTorch, NLTK, CLASSLA)',
        'Strojno učenje v jezikoslovju',
        'Jezikovni viri in infrastruktura (CLARIN)',
        'Vizualna podatkovna analitika in podatkovno rudarjenje (Orange)',
        'XML (TEI za označevanje besedil)'
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <h2 className="section-title animate-fadeIn">Digitalna znanja</h2>
      <div className="skills-grid">
        {skillsCategories.map((category, index) => (
          <div key={index} className={`skill-card animate-fadeIn delay-${index + 1}`}>
            <div className="skill-icon-container">
              <i className={`${category.icon} skill-icon`}></i>
            </div>
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>
                  <i className="fas fa-check"></i> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;