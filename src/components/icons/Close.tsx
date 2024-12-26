import React from "react";
import type { SVGAttributes } from "react";

function Close({ className }: SVGAttributes<SVGElement>) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 100"
    >
      <path
        fill="currentColor"
        d="m10.43 91.691 39.57-39.57 39.57 39.57 2.1211-2.1211-39.57-39.57 39.57-39.57-2.1211-2.1211-39.57 39.57-39.57-39.57-2.1211 2.1211 39.57 39.57-39.57 39.57z"
      />
    </svg>
  );
}

export default Close;
