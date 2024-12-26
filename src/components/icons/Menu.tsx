import React from "react";
import type { SVGAttributes } from "react";

function Menu({ className }: SVGAttributes<SVGElement>) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100.0 100.0"
    >
      <g>
        <path fill="currentColor" d="m30.488 26.961h64.73v3h-64.73z" />
        <path fill="currentColor" d="m6.5 48.5h88.719v3h-88.719z" />
        <path fill="currentColor" d="m50 70.039h45.219v3h-45.219z" />
      </g>
    </svg>
  );
}

export default Menu;
