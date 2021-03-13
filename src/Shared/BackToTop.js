import React from "react";
import { Link } from "react-scroll";
import "./BackToTop.scss";
import usePageOffset from "../Hooks/usePageOffset";
import { useTheme } from "../Hooks/ThemeProvider";
const BackToTop = () => {
  const [theme] = useTheme();
  const windowSize = usePageOffset();
  return (
    <>
      <Link
        className={
          windowSize.y >= 800
            ? `${`BackToTopContainer BackToTopContainer--${theme}`} ${`Visible`}`
            : `${`BackToTopContainer BackToTopContainer--${theme}`} `
        }
        spy={true}
        to="hero"
        smooth={true}
        duration={500}
        offset={-50}
      >
        <i
          style={{
            fontSize: "4rem",
          }}
          className={"fas fa-arrow-circle-up"}
        ></i>
      </Link>
    </>
  );
};

export default BackToTop;
