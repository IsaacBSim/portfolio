import React from 'react';

const ProjectCard = ({ title, description, imageSrc}) => {
  
    return (
      <div className="project-card">
        <div><h1>{title}</h1>
        <p>{description}</p></div>
        <img src={imageSrc} alt="project" className="project-image"/>
      </div>
    );
  };

export default ProjectCard;