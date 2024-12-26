import React from "react";
import SiteLayout from "../components/SiteLayout";
import PageTitle from "../components/PageTitle";
import ContactInfo from "../components/ContactInfo";
import Seo from "../components/Seo";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

function ContactPage() {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useSiteMetadata();

  return (
    <>
      <Seo
        title="Lucky Moon Tattoo | Contact"
        desc="Contact info for Lucky Moon Tattoo, a tattoo shop in Northern Rhode Island specializing in traditional artwork and designs. 20 Cedar Swamp Rd, Smithfield, RI 02917"
        ogImage="images/stencil.png"
        path="/contact"
        url={siteUrl}
      />
      <SiteLayout>
        <main className="main">
          <div className="contact-wrapper">
            <PageTitle>Contact Us</PageTitle>
            <div className="contact-content">
              <ContactInfo />
            </div>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}

export default ContactPage;
