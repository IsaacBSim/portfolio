import React from "react";
import SkillCard from "./SkillCard.js";

const SkillSection = () => {
    return (

        <section id="skills" class="card">
        <div class="section-box">
        <h2>Software Proficiency</h2>
        <div class="skills-grid">

            <SkillCard
            title="Python"
            imageSrc="./skillslogos/python.jpg"
            imageAlt="python"
            />

            <SkillCard
            title="Java"
            imageSrc="./skillslogos/java.jpeg"
            imageAlt="java"
            />

            <SkillCard
            title="C"
            imageSrc="./skillslogos/c.png"
            imageAlt="c"
            />

            <SkillCard
            title="CSS/Html"
            imageSrc="./skillslogos/htmlcss.jpeg"
            imageAlt="html"
            />

            <SkillCard
            title="x86-64"
            imageSrc="./skillslogos/x86.png"
            imageAlt="x86"
            />

            <SkillCard
            title="React"
            imageSrc="./skillslogos/react.png"
            imageAlt="Skill Image"
            />

            <SkillCard
            title="MatLab"
            imageSrc="./skillslogos/matlab.png"
            imageAlt="Skill Image"
            />

            <SkillCard
            title="Wolfram"
            imageSrc="./skillslogos/mathematica.png"
            imageAlt="wolfram"
            />

            <SkillCard
            title="Solidworks"
            imageSrc="./skillslogos/solidworks.jpeg"
            imageAlt="solidworks"
            />

            <SkillCard
            title="Fusion360"
            imageSrc="./skillslogos/fusion360.jpg"
            imageAlt="fusion360"
            />

            <SkillCard
            title="AutoCad"
            imageSrc="./skillslogos/AutoCad.jpeg"
            imageAlt="autocad"
            />

            <SkillCard
            title="Arduino"
            imageSrc="./skillslogos/arduino.jpeg"
            imageAlt="arduino"
            />



        </div>
        </div>
        </section>

  );
};

export default SkillSection;