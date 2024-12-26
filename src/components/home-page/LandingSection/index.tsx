import React from "react";
import { Link } from "gatsby";
import SiteTitle from "./SiteTitle";

function LandingSection() {
  return (
    <section className="landing-section">
      <div className="heading-wrapper landing-heading">
        <span>Est. 2021</span>
        <SiteTitle />
      </div>

      <div className="landing-images">
        <div className="landing-image-wrapper">
          <img
            src="/images/jamie-desk.png"
            alt="Tattoo artist drawing at a desk."
            className="landing-image"
          />
        </div>
        <div className="landing-image-main">
          <img
            src="/images/drawing.png"
            alt="Close up of artist's hand drawing satan's face."
            className="landing-image"
          />
        </div>
        <div className="landing-image-main">
          <img
            src="/images/jamie-and-izaiah.png"
            alt="Two artists talking shop."
            className="landing-image"
          />
        </div>
        <div className="landing-image-wrapper">
          <img
            src="/images/water-bottle.png"
            alt="A water bottle used for cleaning tattoo ink."
            className="landing-image"
          />
        </div>
      </div>

      <div className="landing-text">
        <p>
          Lucky Moon Tattoo provides an inclusive, comfortable space for
          tattooing in Northern Rhode Island. We specialize in American
          Traditional style artwork and designs.{" "}
          <a className="para-link" href="tel:+14016185922">
            Call
          </a>
          ,{" "}
          <a
            className="para-link"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:luckymoontattooco@gmail.com"
          >
            email
          </a>{" "}
          or message us on{" "}
          <a
            className="para-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/luckymoon.tattoo"
          >
            Instagram
          </a>{" "}
          to make an appointment.
        </p>

        <Link to="/contact" className="button">
          Book An Appointment
        </Link>
      </div>
    </section>
  );
}

export default LandingSection;
