import React, { useState } from "react";

import NavLinks from "./NavLinks";
import Container from "../Container/Container";
import DrawerMenu from "./DrawerMenu";
import Backdrop from "./Backdrop";

import useWindowSize from "../../Hooks/useWindowSize";
import { useTheme } from "../../Hooks/ThemeProvider";
// import usePageOffset from "../../Hooks/usePageOffset";
// import usePreviousOffset from "../../Hooks/usePreviousOffset";

import "./Navbar.scss";

const NavBarFunc = () => {
  const [theme] = useTheme();

  const windowSize = useWindowSize();
  // const offSet = usePageOffset();
  // const previous = usePreviousOffset(offSet);

  const [drawerMenuVisible, setDrawerMenuVisible] = useState(false);

  const backdropClickHandler = () => {
    setDrawerMenuVisible(!drawerMenuVisible);
  };

  const closeDrawer = () => setDrawerMenuVisible(false);

  // const handleScrollUpdates = () => {
  //   if (windowSize.width <= 768) {
  //     return true;
  //   }
  //   let visible = true;
  //   if (offSet.y > 0) {
  //     visible = previous.y >= offSet.y;
  //   }

  //   return visible;
  // };

  return (
    <>
      {/* <nav className={handleScrollUpdates() ? "Navbar" : "Navbar-hiden"}> */}
      <nav className={`Navbar Navbar--${theme}`}>
        <Container>
          <DrawerMenu
            closeDrawer={closeDrawer}
            closeButtonAction={backdropClickHandler}
            show={drawerMenuVisible}
          />
          {drawerMenuVisible && <Backdrop click={backdropClickHandler} />}
          <ul className={`Navbar__List Navbar__List--${theme}`}>
            <li className={`Navbar__List__Logo Navbar__List__Logo--${theme}`}>
              Erick Castañeda
            </li>

            {windowSize.width > 768 && <NavLinks />}

            <li
              className={`Navbar__List__Toggle Navbar__List__Toggle--${theme}`}
              onClick={backdropClickHandler}
            >
              <i className="fas fa-bars fa-2x"></i>
            </li>
          </ul>
        </Container>
      </nav>
    </>
  );
};

export default NavBarFunc;
