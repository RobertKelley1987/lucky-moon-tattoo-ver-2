import React from "react";
import type { SVGAttributes } from "react";

function Minus({ className }: SVGAttributes<SVGElement>) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default Minus;
