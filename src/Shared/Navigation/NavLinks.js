import React from "react";
import { Link } from "react-scroll";
import "./NavLinks.scss";
import { useTheme } from "../../Hooks/ThemeProvider";

const NavLinks = (props) => {
  const [theme, toggleTheme] = useTheme();
  return (
    <>
      <div className={`Link Link--${theme}`} onClick={toggleTheme}>
        <i
          className={theme === "light" ? "fas fa-moon" : "fas fa-sun"}

        ></i>
      </div>

      <Link
        className={`Link Link--${theme}`}
        spy={true}
        to="hero"
        smooth={true}
        duration={500}
        offset={-50}
        onClick={props.closeDrawer}
      >
        Contact
      </Link>

      {/* <Link
        className={`Link Link--${theme}`}
        spy={true}
        to="project-section"
        smooth={true}
        duration={500}
        offset={-50}
        onClick={props.closeDrawer}
      >
        Skills
      </Link> */}
      <Link
        className={`Link Link--${theme}`}
        spy={true}
        to="project-section"
        smooth={true}
        duration={500}
        offset={-50}
        onClick={props.closeDrawer}
      >
        Projects
      </Link>

      {/* <Link
        className={`Link Link--${theme}`}
        spy={true}
        to="project-section"
        smooth={true}
        duration={500}
        offset={-50}
        onClick={props.closeDrawer}
      >
        Blog
      </Link>
      <Link
        className={`Link Link--${theme}`}
        spy={true}
        to="project-section"
        smooth={true}
        duration={500}
        offset={-50}
        onClick={props.closeDrawer}
      >
        Contact
      </Link> */}
    </>
  );
};
export default NavLinks;
