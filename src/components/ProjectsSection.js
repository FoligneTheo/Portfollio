import React from 'react';
import ProjectCard from './ProjectCard';

import bookiLogo from '../assets/bookiicon.png';
import kasaLogo from '../assets/kasaicon.png';

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <h2>Mes projets</h2>
      <div className="project-cards">
        <ProjectCard
          link="https://folignetheo.github.io/BookiV3/"
          image={bookiLogo}
          alt="Booki"
          description="Site vitrine d’agence de voyage, réalisé en HTML & CSS."
        />
        <ProjectCard
          link="https://react1-wuik.vercel.app/"
          image={kasaLogo}
          alt="Kasa"
          description="Application de location entre particuliers, réalisé avec React."
        />
      </div>
    </section>
  );
}
