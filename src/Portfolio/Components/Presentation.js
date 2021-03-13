import React from "react";
import Typical from "react-typical";
import "./Presentation.scss";
import resume from "../../assets/pdf/resume.pdf";
import { useTheme } from "../../Hooks/ThemeProvider";

const Presentation = () => {
  const [theme] = useTheme();

  return (
    <div>
      <article className="hero__container">
        <div className="about-me">
          <div className={`about-me__name about-me__name--${theme}`}>
            Hi, I’m{" "}
            <span
              className={`about-me__whatiam__text about-me__whatiam__text--${theme}`}
            >
              Erick Castañeda
            </span>
            !
          </div>
          <div className={`about-me__whatiam about-me__whatiam--${theme}`}>
            I'm a{" "}
            <Typical
              loop={Infinity}
              className={`about-me__whatiam__text about-me__whatiam__text--${theme}`}
              wrapper="b"
              steps={[
                "Computer Engineering Student 🖥",
                1000,
                "ReactJS Developer",
                1000,
                "NodeJS Developer",
                1000,
                "Star Wars Fan 🎬",
                1000,
              ]}
            />
          </div>

          <button
            className={`about-me__button about-me__button--${theme}`}
            onClick={() => window.open(resume)}
          >
            View my CV
          </button>
        </div>
        <div className="picture-container">
          <figure className="picture"></figure>
        </div>
      </article>
    </div>
  );
};

export default Presentation;
