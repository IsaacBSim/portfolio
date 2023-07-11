import React from "react";

const SkillCard = ({ title, imageSrc, imageAlt }) => {
  
    return (
      <div className="skill-card">
        <h4>{title}</h4>
        <img src={imageSrc} alt={imageAlt} className="skill-card-image" />
      </div>
    );
  };
  

export default SkillCard;
