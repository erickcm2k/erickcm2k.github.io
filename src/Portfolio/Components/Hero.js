import React from "react";
import "./Hero.scss";
import Container from "../../Shared/Container/Container";
import Presentation from "./Presentation";
import Description from "./Description";
import { useTheme } from "../../Hooks/ThemeProvider";
const Hero = () => {
  const [theme] = useTheme();

  return (
    <>
    <section className={`hero hero--${theme}`}>
      <Container>
        <Presentation />
        <Description />
      </Container>
    </section>
    </>
  );
};

export default Hero;
