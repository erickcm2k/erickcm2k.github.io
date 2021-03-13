import React from "react";
import { useTheme } from "../../Hooks/ThemeProvider";
import "./ProjectCard.scss";

const ProjectCard = (props) => {
  const [theme] = useTheme();

  const btnClick = (url) => {
    window.open(url);
  };

  const { projectImage } = props;
  return (
    <article className={`Card Card--${theme}`}>
      <figure className={`Card__projectImageContainer`}>
        <img
          style={{ backgroundImage: projectImage }}
          src={props.projectImage}
          alt={props.projectName}
          className={`Card__projectImageContainer__projectImage`}
        />
      </figure>
      <div className={`Card__cardBody`}>
        <h2
          className={`Card__cardBody__projectName Card__cardBody__projectName--${theme}`}
        >
          {props.projectName}
        </h2>
        <p className={`Card__cardBody__date Card__cardBody__date--${theme}`}>
          {props.date}
        </p>
        <p
          className={`Card__cardBody__description Card__cardBody__description--${theme}`}
        >
          {props.description}
        </p>
        <div className={`Card__cardBody__technologiesContainer`}>
          {props.technologies.map((technologie) => {
            return (
              <p
                key={technologie}
                className={`Card__cardBody__technologiesContainer__technologie Card__cardBody__technologiesContainer__technologie--${theme}`}
              >
                {technologie}
              </p>
            );
          })}
        </div>

        <div className={`Card__cardBody__buttonContainer`}>
          {props.github && (
            <button
              onClick={() => btnClick(props.github)}
              className={`Card__cardBody__buttonContainer__githubButton`}
            >
              Source <i className="fab fa-github fa-1x"></i>
            </button>
          )}
          {props.url && (
            <button
              onClick={() => btnClick(props.url)}
              className={`Card__cardBody__buttonContainer__visitButton Card__cardBody__buttonContainer__visitButton--${theme}`}
            >
              Visit
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
