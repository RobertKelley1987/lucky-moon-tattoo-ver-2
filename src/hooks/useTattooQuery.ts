import { graphql, useStaticQuery } from "gatsby";
import type { MdxResponse, TattooNode } from "../types";

// Hook to get tattoos data using graphql query.
export function useTattooQuery() {
  const data = useStaticQuery<MdxResponse<TattooNode>>(graphql`
    query TattoosQuery {
      allMdx(
        filter: { frontmatter: { type: { eq: "tattoo" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          frontmatter {
            artist
            alt
            date
            name
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

  return { allTattoos: data.allMdx.nodes };
}
