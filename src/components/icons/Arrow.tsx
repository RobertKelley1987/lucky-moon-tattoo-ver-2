import React from "react";
import type { SVGAttributes } from "react";

function Arrow({ className }: SVGAttributes<SVGElement>) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="10 10 80 80"
    >
      <g transform="translate(0,-952.36218)">
        <path
          d="m 80.750711,1001.6725 -16.00015,-17.00005 c -0.3873,-0.4042 -1.04921,-0.4071 -1.42211,-0.047 -0.379,0.3659 -0.4068,1.0376 -0.047,1.4221 l 14.40636,15.31255 -57.68765,0 c -0.5523,0 -1,0.4477 -1,1 0,0.5523 0.4477,1 1,1 l 57.68765,0 -14.40636,15.3125 c -0.3601,0.3845 -0.3379,1.0621 0.047,1.4221 0.3846,0.36 1.00351,0.3689 1.42211,-0.047 l 16.00015,-17 c 0.3803,-0.468 0.2803,-1.0416 0,-1.3752"
          fill="currentColor"
          fillOpacity="1"
          stroke="none"
          visibility="visible"
          display="inline"
          overflow="visible"
        />
      </g>
    </svg>
  );
}

export default Arrow;
