import { useStaticQuery, graphql } from "gatsby";

export function useSiteMetadata() {
  return useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            desc
            siteUrl
            ogImage
          }
        }
      }
    `
  );
}
