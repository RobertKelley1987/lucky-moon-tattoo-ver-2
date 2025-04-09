import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import TattooGrid from "../TattooGrid";

function FeaturedTattoos() {
  const data = useStaticQuery(graphql`
    query FeaturedTattoosQuery {
      allMdx(
        filter: {
          frontmatter: { type: { eq: "tattoo" }, featured: { eq: true } }
        }
        sort: { frontmatter: { featuredOrder: ASC } }
      ) {
        nodes {
          id
          frontmatter {
            alt
            name
            date
            artist
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          id
        }
      }
    }
  `);

  const tattooNodes = data.allMdx.nodes;

  return <TattooGrid tattooNodes={tattooNodes} />;
}

export default FeaturedTattoos;
