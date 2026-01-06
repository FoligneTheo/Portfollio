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
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="project-card image-card"
    >
      <img src={image} alt={alt} />
      <p className="project-description">{description}</p>
    </a>
  );
};

export default ProjectCard;