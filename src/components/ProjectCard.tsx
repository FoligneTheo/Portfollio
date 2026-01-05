import React from 'react';
import '../components/ProjectsSection.scss';

interface ProjectCardProps {
  link: string;
  image: string;
  alt: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ link, image, alt, description }) => {
  return (
    <div className="project-card image-card">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} alt={alt} />
      </a>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
