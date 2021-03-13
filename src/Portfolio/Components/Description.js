import React from "react";
import { useTheme } from "../../Hooks/ThemeProvider";
import "./Description.scss";
const Description = () => {
  const [theme] = useTheme();
  return (
    <div>
      <article className="description">
        <div className="description__icon-container">
          <ul className="description__icon-container__list">
            <li>
              <a
                href="https://github.com/erickcm2k"
                target="_blank"
                rel="noopener noreferrer"
                className={`description__icon-container__list__item description__icon-container__list__item--${theme}`}
              >
                <i className="fab fa-github fa-3x px-md-1"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/erickcastanedamartinez/"
                target="_blank"
                rel="noopener noreferrer"
                className={`description__icon-container__list__item description__icon-container__list__item--${theme}`}
              >
                <i className="fab fa-linkedin-in fa-3x px-md-1"></i>
              </a>
            </li>
            <li>
              <a
                href="https://telegram.me/erickcm2k"
                target="_blank"
                rel="noopener noreferrer"
                className={`description__icon-container__list__item description__icon-container__list__item--${theme}`}
              >
                <i className="fab fa-telegram fa-3x px-md-1"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className={`message message--${theme}`}>
          <p>Constantly trying to become the best version of myself.</p>
          <p>
            Currently learning how to build web apps using the{" "}
            <span className="nodeish">ME</span>
            <span className="reactish">R</span>
            <span className="nodeish">N</span> stack.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Description;
