import path from "path";
import type { GatsbyNode } from "gatsby";
import type { ArtistNode } from "./src/types";

type Data = {
  allMdx: { nodes: ArtistNode[] };
};

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { data } = await graphql<Data>(`
    query ArtistsQuery {
      allMdx(filter: { frontmatter: { type: { eq: "artist" } } }) {
        nodes {
          id
          frontmatter {
            name
            slug
          }
        }
      }
    }
  `);

  if (!data) {
    throw Error("Cannot fetch data required for dynamic page creation.");
  }

  const artistNodes = data.allMdx.nodes;
  artistNodes.forEach((node) => {
    const { slug, name } = node.frontmatter;
    actions.createPage({
      path: `/artists/${slug}`,
      component: path.resolve("src/templates/artist.tsx"),
      context: { id: node.id, name },
    });
  });
};
