import React from "react";
import { useMenu } from "../../../hooks/useMenu";
import Close from "../../icons/Close";
import Menu from "../../icons/Menu";

function MenuButton() {
  const { menuState, setMenuState } = useMenu();
  const dropdownOpen = menuState !== "closed";

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    setMenuState(dropdownOpen ? "closed" : "menu");
  }

  const closeIcon = <Close className="menu-button-x" />;
  const menuIcon = <Menu />;

  return (
    <button onClick={handleClick} className="menu-button">
      {dropdownOpen ? closeIcon : menuIcon}
    </button>
  );
}

export default MenuButton;
