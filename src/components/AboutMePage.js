import React from "react";
import SectCard from "./SectCard.js";

const AboutMeSection = () => {
  return (
    <section id="about" className="card">
      <div className="section-box">
        <h2>About Me</h2>
        <div className="about-box">
        <p>
          Welcome to my portfolio website! My name is Isaac B. Sim, and I'm a
          third-year student at the University of Virginia, pursuing a double
          major in Computer Science and Biomedical Engineering. This unique
          combination has allowed me to approach problem-solving from different
          angles, combining technical expertise with a deep understanding of
          human biology and biomechanics.
        </p>

        <p>
          As an aspiring developer, I have a deep passion for prototyping and
          creating innovative solutions. I enjoy exploring the intersection of
          technology and human-centered design, seeking ways to leverage
          technology to improve lives and make a positive impact. I've actively
          engaged in various hands-on projects, collaborating with fellow
          students and professionals. On this website, you'll find a showcase of
          my projects and accomplishments, ranging from web development to
          biomedical applications.
        </p>

        <p>
          Feel free to explore my projects and experiences. If you have any
          inquiries please don't hesitate to reach out. I look forward to
          connecting with you!
        </p>

        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
