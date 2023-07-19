import React, { useState } from "react";
import "./App.css";
import HomeSection from "./components/HomePage.js";
import AboutMeSection from "./components/AboutMePage.js";
import ProjectSection from "./components/ProjectPage.js";
import SkillSection from "./components/SkillPage.js";
import ContactSection from "./components/ContactPage.js";
{/*import Navbar from "./components/Nav.js";*/}


function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="App">
      <header>
        {/*<Navbar />*/}
      </header>
      
      <button className="toggle-button" onClick={toggleSidebar}>
        MENU
      </button>

      
      <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Software Proficiency</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      
      <HomeSection />
      <AboutMeSection />
      <ProjectSection />
      <SkillSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
