import React from "react";
import "./ProjectSection.scss";
import ProjectCardContainer from "./ProjectCardContainer";
import Container from "../../Shared/Container/Container";
import { useTheme } from "../../Hooks/ThemeProvider";

const ProjectSection = () => {
  const [theme] = useTheme();

  return (
    <section
      id="project-section"
      className={`projectSection projectSection__background--${theme}`}
    >
      <h1 className={`projectSection__title projectSection__title--${theme}`}>
        Projects
      </h1>
      <Container>
        <ProjectCardContainer />
      </Container>
    </section>
  );
};

export default ProjectSection;
