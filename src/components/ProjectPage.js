import React from "react";
import ProjectCard from "./ProjectCard.js";

const ProjectSection = () => {
  return (
    <section id="projects" className="card">
      <div className="section-box">
        <h2>Projects</h2>
        <div className="project-grid">
          <ProjectCard
            title="Portfolio Website"
            description="A dynamic and visually captivating project that 
            showcases my skills, experiences, and accomplishments as a 
            developer. Built using HTML, CSS, JavaScript, React, and powered 
            by Visual Studio Code, this project represents the culmination of 
            my design and development skills."
            imageSrc="./projectimages/website.png"
            link = "https://github.com/IsaacBSim/portfolio"
          />

          <ProjectCard
            title="Quantifying Hand Gesture Recognition [Parkinson's]"
            description="Arduino device designed to 
            measure and quantify hand gestures for aiding in the diagnosis 
            of Parkinson's disease. With the combined use of sensors 
            and machine learning algorithms, this project aims to 
            revolutionize the field of healthcare by providing an accurate 
            and non-invasive method for detecting early signs of Parkinson's 
            disease. By leveraging CAD software and 3D printing, a design 
            to optimize the device's form and functionality was developed."
            imageSrc="./projectimages/handgesture.jpg"
          />

          <ProjectCard
            title="Quantifying Tongue Function Measuring [ALS]"
            description="Arduino device designed to measure and quantify 
            tongue function degradation for aiding in the 
            analysis of ALS (Amyotrophic Lateral Sclerosis) progression. 
            This project aims to provide valuable insights into the impact 
            of ALS on tongue muscle control. By leveraging CAD software, 
            CNC machining, and 3D printing, a device that is not only 
            functional but also highly customizable was developed. 
            This flexibility allows for adaptations and refinements per 
            patients' needs and fit."
            imageSrc="./projectimages/tongue.jpeg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
