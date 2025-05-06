import React from 'react';
import './About.scss';

export default function About() {
  return (
    <section id="about">
      <div className="about-text">
        <h2>À propos de moi</h2>
        <p>J'ai suivi une formation de développeur web <strong>OpenClassrooms</strong>.</p>
        <p>Ce qui m'a permis d'acquérir ces compétences.</p>
      </div>

      <div className="about-skills">
        <ul>
          <li><strong>Front-end :</strong> HTML, CSS, JavaScript, React, responsive design</li>
          <li><strong>Back-end :</strong> Node.js, Express, MongoDB</li>
          <li><strong>Outils :</strong> GitHub, Vercel, VS Code, Figma, Trello</li>
        </ul>
      </div>
    </section>
  );
}
