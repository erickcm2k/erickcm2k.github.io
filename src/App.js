import React from "react";
import Hero from "./Portfolio/Components/Hero";
import Navbar from "./Shared/Navigation/Navbar";
import ProjectSection from "./Portfolio/Components/ProjectSection";
import WorkExperienceSection from "./Portfolio/Components/WorkExperience/WorkExperienceSection";
import BackToTop from "./Shared/BackToTop";
import ThemeProvider from "./Hooks/ThemeProvider";
import "./normalize.css";
const App = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Hero />
        <WorkExperienceSection />
        <ProjectSection />
        <BackToTop />
      </ThemeProvider>
    </>
  );
};

export default App;
