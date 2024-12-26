import React from "react";
import { Link } from "gatsby";
import { useArtistsQuery } from "../../../hooks/useArtistsQuery";
import { useMenu } from "../../../hooks/useMenu";
import BackButton from "./BackButton";
import type { MouseEvent } from "react";

type ArtistDropdownProps = {
  path?: string;
};

function ArtistDropdown({ path }: ArtistDropdownProps) {
  const { artists } = useArtistsQuery();
  const { setMenuState } = useMenu();

  // Function to handle edge case where user clicks on artist name in header,
  // but is already viewing that artist's page.
  function handleClick(e: MouseEvent, artistSlug: string) {
    if (!path || path === "/") return;

    const currArtist = path?.split("/")[2];
    if (currArtist === artistSlug) setMenuState("closed");
  }

  return (
    <div className="artist-dropdown">
      <div className="artist-dropdown-wrapper">
        <BackButton />
        {artists.map((artist: any) => {
          const { name, slug } = artist.frontmatter;

          return (
            <Link
              onClick={(e) => handleClick(e, slug)}
              key={artist.id}
              className="artist-dropdown-link"
              to={`/artists/${slug}`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ArtistDropdown;
