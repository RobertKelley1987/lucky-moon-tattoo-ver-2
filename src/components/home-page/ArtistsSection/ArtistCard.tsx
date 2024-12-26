import React from "react";
import { Link } from "gatsby";
import InstagramHandle from "../../InstagramHandle";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import type { ArtistNode } from "../../../types";

type ArtistCardProps = {
  artistNode: ArtistNode;
};

function ArtistCard({ artistNode }: ArtistCardProps) {
  const { slug, name, position, instagramHandle, thumbnail } =
    artistNode.frontmatter;
  const image = getImage(thumbnail);

  return (
    <div className="artist-card">
      <Link to={`/artists/${slug}`} className="artist-card-link">
        {image && (
          <GatsbyImage
            image={image}
            alt="Artist thumbnail portrait."
            className="artist-card-image"
          />
        )}
        <h3 className="artist-card-name">{name}</h3>
      </Link>
      <p className="artist-card-position">{position}</p>
      <InstagramHandle handle={instagramHandle} />
    </div>
  );
}

export default ArtistCard;
