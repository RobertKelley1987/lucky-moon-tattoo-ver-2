import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTattoo } from "../hooks/useTattoo";
import type { TattooNode } from "../types";

type TattooGridProps = {
  tattooNodes: TattooNode[];
};

function TattooGrid({ tattooNodes }: TattooGridProps) {
  const { setSelectedTattoo } = useTattoo();

  function handleClick(tattooNode: TattooNode) {
    setSelectedTattoo(tattooNode);
  }

  function handleKeyDown(e: React.KeyboardEvent, tattooNode: TattooNode) {
    if (e.key === "Enter") setSelectedTattoo(tattooNode);
  }

  return (
    <div className="tattoo-grid">
      {tattooNodes.map((tattoo) => {
        const tattooImage = getImage(tattoo.frontmatter.image);

        if (tattooImage) {
          return (
            <div
              onClick={() => handleClick(tattoo)}
              onKeyDown={(e) => handleKeyDown(e, tattoo)}
              className="tattoo-grid-tattoo"
              key={tattoo.id}
              tabIndex={0}
            >
              <GatsbyImage
                key={tattoo.id}
                className="tattoo-grid-image"
                image={tattooImage}
                alt={tattoo.frontmatter.alt}
                loading="eager"
              />
            </div>
          );
        }
      })}
    </div>
  );
}

export default TattooGrid;
