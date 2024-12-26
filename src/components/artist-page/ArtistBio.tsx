import React from "react";
import { Link } from "gatsby";
import type { ReactElement } from "react";

type ContactLib = {
  [key: string]: ReactElement;
};

const contactInfo: ContactLib = {
  "mark-helstrom": (
    <>
      To get in touch with Mark, please email{" "}
      <a
        className="para-link"
        rel="noopener noreferrer"
        target="_blank"
        href="mailto:truetraditional@gmail.com"
      >
        truetraditional@gmail.com
      </a>{" "}
      with one or more appointment times that work for you, an idea of what you
      would like, approximate size + placement, and any reference photos you
      think would be helpful.
    </>
  ),
  "jamie-beshaw": (
    <>
      Jamie is available for appointments during all normal business hours. You
      can schedule an appointment with the artist by{" "}
      <Link className="para-link" to="/contact">
        contacting the shop
      </Link>{" "}
      or through{" "}
      <a
        className="para-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://instagram.com/hvy_hounds"
      >
        Instagram
      </a>
      .
    </>
  ),
  "nathan-miller": (
    <>
      You can make an appointment with Nathan through his{" "}
      <a
        className="para-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://instagram.com/malin.tats"
      >
        Instagram
      </a>
      ,{" "}
      <a
        className="para-link"
        rel="noopener noreferrer"
        target="_blank"
        href="mailto:natemillerbooking@yahoo.com"
      >
        booking email
      </a>{" "}
      or by{" "}
      <Link className="para-link" to="/contact">
        contacting the shop
      </Link>
      .
    </>
  ),
  "izaiah-yelle": (
    <>
      You can schedule an appointment with Izaiah via{" "}
      <a
        className="para-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://instagram.com/izaiahyelle"
      >
        Instagram
      </a>{" "}
      or by{" "}
      <Link className="para-link" to="/contact">
        contacting the shop
      </Link>
      . Check out some samples of Izaiah's work below!
    </>
  ),
};

type ArtistBioProps = {
  bio: string;
  slug: string;
};

function ArtistBio({ bio, slug }: ArtistBioProps) {
  return (
    <div className="artist-bio">
      <p>{bio.trim()}</p>
      {slug && <p>{contactInfo[slug]}</p>}
    </div>
  );
}

export default ArtistBio;
