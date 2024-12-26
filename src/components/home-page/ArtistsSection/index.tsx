import React from "react";
import SectionTitle from "../../SectionTitle";
import ArtistCard from "./ArtistCard";
import PeaceSign from "../../art/PeaceSign";
import { useArtistsQuery } from "../../../hooks/useArtistsQuery";

function ArtistsSection() {
  const { artists } = useArtistsQuery();

  return (
    <section className="artists-section">
      <div className="heading-wrapper artists-heading">
        <span>Click an artist to view their work.</span>
        <SectionTitle>Artists</SectionTitle>
      </div>
      <div className="artists-grid">
        {artists.map((artist) => {
          return <ArtistCard key={artist.id} artistNode={artist} />;
        })}
        <PeaceSign className="artists-svg" />
      </div>
    </section>
  );
}

export default ArtistsSection;
