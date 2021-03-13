import React from "react";
import "./DrawerMenu.scss";
import NavLinks from "./NavLinks";
import { useTheme } from "../../Hooks/ThemeProvider";

const DrawerMenu = (props) => {
  const [theme] = useTheme();
  return (
    <nav className={`side-drawer ${props.show && "open"}`}>
      <ul className={`side-drawer__menu side-drawer__menu--${theme}`}>
        <li
          className={`side-drawer__menu__close-button side-drawer__menu__close-button--${theme}`}
          onClick={props.closeButtonAction}
        >
          <i className="fas fa-times"></i>
        </li>
        <NavLinks closeDrawer={props.closeDrawer} />
      </ul>
    </nav>
  );
};

export default DrawerMenu;
