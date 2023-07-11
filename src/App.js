import React from "react";
import "./App.css";
import Navbar from "./components/Nav.js";
import HomeSection from "./components/HomePage.js";
import AboutMeSection from "./components/AboutMePage.js";
import ProjectSection from "./components/ProjectPage.js";
import SkillSection from "./components/SkillPage.js";
import ContactSection from "./components/ContactPage.js";

function App() {
  return (
    <div className="App">

      <header>
        <Navbar />
      </header>
      
      <body>
        <HomeSection />
        <AboutMeSection />
        <ProjectSection />
        <SkillSection/>
        <ContactSection/>
      </body>
      
    </div>
  );
}

export default App;
