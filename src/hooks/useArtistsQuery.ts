import { graphql, useStaticQuery } from "gatsby";
import type { ArtistNode, MdxResponse } from "../types";

// Hook to query for all artists using graphql.
export function useArtistsQuery() {
  const data = useStaticQuery<MdxResponse<ArtistNode>>(graphql`
    query ArtistSectionQuery {
      allMdx(
        sort: { frontmatter: { order: ASC } }
        filter: { frontmatter: { type: { eq: "artist" } } }
      ) {
        nodes {
          id
          frontmatter {
            name
            order
            position
            instagramHandle
            slug
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  return { artists: data.allMdx.nodes };
}
