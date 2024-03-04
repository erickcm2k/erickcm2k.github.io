import React from "react";
import "./Presentation.scss";
import { useTheme } from "../../Hooks/ThemeProvider";
import publicKey from '../../assets/pdf/public-key.pdf'
 import Typical from "./Typical";
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
          <Typical></Typical> 
          <button
            className={`about-me__button about-me__button--${theme}`}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1fmNE8DTipammlw8x4YbuDb6zKdujn1FK/view?usp=sharing"
              )
            }
          >
            View my CV
          </button>
          <button
            className={`about-me__button about-me__button--${theme}`}
            onClick={() =>
              window.open(publicKey)
            }
          >
            View my public key
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
