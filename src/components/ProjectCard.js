import React from 'react';

const ProjectCard = ({ title, description, imageSrc, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <img src={imageSrc} alt="project" className="project-image" />
    </a>
  );
};

export default ProjectCard;
