import React from "react";
import { Link } from "gatsby";
import { useMenu } from "../../../hooks/useMenu";

function HeaderLogo() {
  const { menuState } = useMenu();

  let classNames = "logo";
  if (menuState == "menu" || menuState == "artists") {
    classNames += " logo-static";
  }

  return (
    <Link to="/" className={classNames} data-text="LMT">
      <div className="logo-img"></div>
      <span>LMT</span>
    </Link>
  );
}

export default HeaderLogo;
