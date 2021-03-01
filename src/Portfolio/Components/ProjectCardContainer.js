import React from "react";

import ProjectCard from "./ProjectCard";

import classes from "./ProjectCardContainer.module.css";

import projectsData from "../../Shared/Data/data";

const ProjectCardContainer = () => {
  return (
    <section className={classes.projectSection}>
      {projectsData.map((card) => {
        return (
          <ProjectCard
            key={card.projectName}
            projectImage={card.projectImage}
            projectName={card.projectName}
            date={card.date}
            description={card.description}
            url={card.url}
            technologies={card.technologies}
            github={card.github}
          />
        );
      })}
    </section>
  );
};

export default ProjectCardContainer;
