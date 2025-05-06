import React from 'react';
import '../components/ProjectsSection.scss'


export default function ProjectCard({ link, image, alt, description }) {
  return (
    <div className="project-card image-card">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} alt={alt} />
      </a>
      <p className="project-description">{description}</p>
    </div>
  );
}
