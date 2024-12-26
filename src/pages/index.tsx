import React from "react";
import { Link } from "gatsby";
import TattooContextProvider from "../context/TattooContext";
import TattooModal from "../components/TattooModal";
import SiteLayout from "../components/SiteLayout";
import LandingSection from "../components/home-page/LandingSection";
import ArtistsSection from "../components/home-page/ArtistsSection";
import SectionTitle from "../components/SectionTitle";
import FeaturedTattoos from "../components/home-page/FeaturedTattoos";
import ContactInfo from "../components/ContactInfo";
import Seo from "../components/Seo";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import type { PageProps } from "gatsby";

const IndexPage = ({ location }: PageProps) => {
  const {
    site: {
      siteMetadata: { title, desc, ogImage, siteUrl },
    },
  } = useSiteMetadata();

  return (
    <>
      <Seo title={title} desc={desc} ogImage={ogImage} url={siteUrl} path="" />
      <SiteLayout path={location.pathname}>
        <TattooContextProvider>
          <TattooModal />
          <main className="main hide-overflow-x">
            <LandingSection />

            <ArtistsSection />

            <section className="home-section">
              <div className="heading-wrapper">
                <span>See artist pages for more images.</span>
                <SectionTitle>Portfolio Samples</SectionTitle>
              </div>
              <FeaturedTattoos />
            </section>

            <section className="home-section">
              <div className="heading-wrappera">
                <span>Like what you see?</span>
                <Link to="/contact" className="heading-link">
                  <SectionTitle>Get In Touch</SectionTitle>
                </Link>
              </div>
              <ContactInfo />
            </section>
          </main>
        </TattooContextProvider>
      </SiteLayout>
    </>
  );
};

export default IndexPage;
