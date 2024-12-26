import React from "react";
import Email from "../icons/Email";

type ArtistEmailProps = {
  email: string;
};

function ArtistEmail({ email }: ArtistEmailProps) {
  return (
    <p className="artist-email">
      <Email />
      <a
        className="plain-link"
        rel="noopener noreferrer"
        target="_blank"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </p>
  );
}

export default ArtistEmail;
