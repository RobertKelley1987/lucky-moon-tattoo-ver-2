import React from "react";
import { useEffect, useRef } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import TattooContextProvider from "../context/TattooContext";
import SiteLayout from "../components/SiteLayout";
import TattooModal from "../components/TattooModal";
import PageTitle from "../components/PageTitle";
import InstagramHandle from "../components/InstagramHandle";
import ArtistEmail from "../components/artist-page/ArtistEmail";
import TattooGrid from "../components/TattooGrid";
import ArtistBio from "../components/artist-page/ArtistBio";
import Seo from "../components/Seo";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import type { PageProps } from "gatsby";
import type { ArtistNode, TattooNode } from "../types";

type DataProps = {
  artist: ArtistNode;
  tattoos: {
    nodes: TattooNode[];
  };
};

function ArtistPage({ data, location }: PageProps<DataProps>) {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useSiteMetadata();

  const {
    name,
    position,
    instagramHandle,
    email,
    slug,
    img1,
    img1Alt,
    img2,
    img2Alt,
    img3,
    img3Alt,
  } = data.artist.frontmatter;
  const image1 = getImage(img1);
  const image2 = getImage(img2);
  const image3 = getImage(img3);

  return (
    <>
      <Seo
        path={`/artists/${slug}`}
        url={siteUrl}
        ogImage={`artists/${slug}.png`}
        title={`Artists | ${name}`}
        desc={`Artist info and portfolio samples for ${name} of Lucky Moon Tattoo, a traditional tattoo shop in Northern Rhode Island.`}
      />
      <SiteLayout path={location.pathname}>
        <TattooContextProvider>
          <TattooModal />
          <main className="main hide-overflow-x clip-overflow-y">
            <div className="artist-wrapper">
              <div className="artist-heading-grid">
                <div className="artist-heading-text">
                  <p className="artist-heading-title">{position}</p>
                  <PageTitle>{name}</PageTitle>
                  <InstagramHandle handle={instagramHandle} />
                  {email && <ArtistEmail email={email} />}
                </div>
                <div className="artist-images">
                  {image1 && (
                    <GatsbyImage
                      className="artist-image"
                      image={image1}
                      alt={img1Alt}
                    />
                  )}
                  {image2 && (
                    <GatsbyImage
                      className="artist-image"
                      image={image2}
                      alt={img2Alt}
                    />
                  )}
                  {image3 && (
                    <GatsbyImage
                      className="artist-image"
                      image={image3}
                      alt={img3Alt}
                    />
                  )}
                </div>
              </div>
              <ArtistBio bio={data.artist.body} slug={slug} />
              <TattooGrid tattooNodes={data.tattoos.nodes} />
              <p>
                Check out this artist's{" "}
                <a
                  className="para-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://instagram.com/${instagramHandle}`}
                >
                  Instagram
                </a>{" "}
                for more samples.
              </p>
            </div>
          </main>
        </TattooContextProvider>
      </SiteLayout>
    </>
  );
}

export const query = graphql`
  query ArtistQuery($id: String, $name: String) {
    artist: mdx(id: { eq: $id }) {
      body
      frontmatter {
        type
        name
        position
        slug
        instagramHandle
        email
        img1Alt
        img2Alt
        img3Alt
        img1 {
          childImageSharp {
            gatsbyImageData
          }
        }
        img2 {
          childImageSharp {
            gatsbyImageData
          }
        }
        img3 {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    tattoos: allMdx(
      sort: { id: ASC }
      filter: { frontmatter: { type: { eq: "tattoo" }, artist: { eq: $name } } }
      limit: 12
    ) {
      nodes {
        id
        frontmatter {
          alt
          name
          artist
          date
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default ArtistPage;
