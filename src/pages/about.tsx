import React from "react";
import { Link } from "gatsby";
import PageTitle from "../components/PageTitle";
import SiteLayout from "../components/SiteLayout";
import SectionTitle from "../components/SectionTitle";
import ContactInfo from "../components/ContactInfo";
import Plant from "../components/art/Plant";
import Seo from "../components/Seo";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

function AboutPage() {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useSiteMetadata();

  return (
    <>
      <Seo
        title="Lucky Moon Tattoo | About"
        path="/about"
        desc="The mission and booking information for Lucky Moon Tattoo, a tattoo parlor in Northern Rhode Island specializing in traditional artwork and design. 20 Cedar Swamp Rd, Smithfield, RI 02917"
        url={siteUrl}
        ogImage="images/izaiah-desk.png"
      />
      <SiteLayout>
        <main className="main hide-overflow-x">
          <div className="about-wrapper">
            <section className="about-grid">
              <div className="heading-wrapper">
                <span>What are we all about?</span>
                <PageTitle>About Our Shop</PageTitle>
              </div>

              <div className="about-images">
                <div>
                  <img
                    src="/images/sanitation.png"
                    alt="Tattoo artist cleaning a chair."
                    className="about-image"
                  />
                </div>
                <div className="about-image-last">
                  <img
                    src="/images/owl-tattoo.png"
                    alt="Close up of artist giving an owl tattoo."
                    className="about-image"
                  />
                </div>
                <div className="about-image-top">
                  <img
                    src="/images/guns.png"
                    alt="A used tattoo gun sitting on a desk."
                    className="about-image"
                  />
                </div>
              </div>

              <div className="about-section-text">
                <p>
                  Lucky Moon Tattoo is Smithfield, Rhode Island's first tattoo
                  parlor. We think that any tattoo is badass, and we want our
                  community to have a judgment-free space to get them done. If
                  this sounds like your kind of place,{" "}
                  <Link className="para-link" to="/contact">
                    get in touch
                  </Link>{" "}
                  to schedule an appointment.
                </p>
              </div>
            </section>

            <section className="about-booking-section">
              <Plant className="about-svg" />
              <div className="heading-wrapper about-booking-heading">
                <span className="about-text">
                  Here's how to make an appointment.
                </span>
                <SectionTitle>Booking Your Tattoo</SectionTitle>
              </div>

              <div className="about-text about-booking-text">
                <p>
                  To book an appointment,{" "}
                  <a className="para-link" href="tel:+14016185922">
                    call
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
                  </a>
                  . If you want to work with a specific artist, check their
                  artist page for the best way to contact them directly. We
                  currently accept walk-ins, but cannot guarantee you will get
                  service if you do not make an appointment.
                </p>
              </div>
            </section>

            <section className="about-section">
              <div className="heading-wrapper">
                <span>Still interested?</span>
                <Link className="heading-link" to="/contact">
                  <SectionTitle>Get In Touch</SectionTitle>
                </Link>
              </div>
              <ContactInfo />
            </section>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}

export default AboutPage;
