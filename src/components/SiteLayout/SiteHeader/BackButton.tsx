import React from "react";
import { useMenu } from "../../../hooks/useMenu";
import Arrow from "../../icons/Arrow";
import type { MouseEvent } from "react";

function BackButton() {
  const { setMenuState } = useMenu();

  function handleClick(e: MouseEvent) {
    e.stopPropagation();
    setMenuState("menu");
  }
  return (
    <button onClick={handleClick} className="back-button">
      <Arrow className="back-button-arrow" />
    </button>
  );
}

export default BackButton;
