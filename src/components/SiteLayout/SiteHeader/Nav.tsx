import React from "react";
import { Link } from "gatsby";
import { useMenu } from "../../../hooks/useMenu";

function Nav() {
  const { menuState, setMenuState } = useMenu();

  console.log(menuState);

  function handleClick() {
    setMenuState("artists");
  }

  // Hide nav links in mobile unless menu is opened via burger button.
  const mobileDisplay = menuState === "menu" ? "nav-visible" : "nav-hidden";

  // Make background black if dropdown menu is open.
  const bg = menuState !== "closed" ? "nav-opaque" : "nav-transparent";

  // Only display link as active if artists dropdown is closed.
  const activeLink = menuState !== "artists" ? "nav-active" : "";

  // Give artist link active styles when dropdown is open.
  const buttonClassName =
    menuState === "artists" ? "nav-button nav-active" : "nav-button";

  return (
    <nav className={`${mobileDisplay} ${bg} nav`}>
      <ul className="nav-list">
        <li className="nav-list-item-1">
          <button
            className={buttonClassName}
            onClick={handleClick}
            data-text="Artists"
          >
            Artists
          </button>
        </li>
        <li className="nav-list-item-2">
          <Link
            className="nav-link"
            to="/about"
            activeClassName={activeLink}
            data-text="About"
          >
            About
          </Link>
        </li>
        <li className="nav-list-item-3">
          <Link
            className="nav-link"
            to="/contact"
            activeClassName={activeLink}
            data-text="Contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
