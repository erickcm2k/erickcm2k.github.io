import React, { useRef, useEffect } from "react";
import "./Typical.scss";
import { useTheme } from "../../Hooks/ThemeProvider";
import { type, type as loop } from "@camwiegert/typical";

const Typical = () => {
  const [theme] = useTheme();
  const typicalRef = useRef();

  useEffect(() => {
    const typicalNode = typicalRef.current;
    const steps = [
      1000,
      "I'm a Computer Engineering Student 🖥",
      1000,
      "I'm a React Developer",
      1000,
      "I'm a Star wars fan 🍿",
    ];

    type(typicalNode, ...steps, loop);
  }, []);

  return (
    <div className={`about-me__whatiam about-me__whatiam--${theme}`}>
      <div
        ref={typicalRef}
        className={`typical-wrapper about-me__whatiam__text about-me__whatiam__text--${theme}`}
      ></div>
    </div>
  );
};

export default Typical;
