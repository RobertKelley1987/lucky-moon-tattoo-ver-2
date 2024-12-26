import React from "react";
import Instagram from "./icons/Instagram";

type InstagramHandleProps = {
  handle: string;
};

function InstagramHandle({ handle }: InstagramHandleProps) {
  return (
    <p className="instagram-handle">
      <Instagram />
      <a
        className="plain-link"
        rel="noopener noreferrer"
        target="_blank"
        href={`https://www.instagram.com/${handle}/`}
      >
        {handle}
      </a>
    </p>
  );
}

export default InstagramHandle;
