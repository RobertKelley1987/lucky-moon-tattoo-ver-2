import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Lucky Moon Tattoo | Smithfield, RI",
    desc: "Lucky Moon Tattoo is a tattoo shop in Northern Rhode Island specializing in American Traditional tattoos. It is the first tattoo parlor established in Smithfield, RI. 20 Cedar Swamp Rd, Smithfield, RI 02917",
    siteUrl: "https://luckymoontattoo.com",
    ogImage: "favicons/icon.png",
    image: "favicons/icon.png",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/favicons/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content`,
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
        web: [
          {
            name: "Poppins",
            file: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;0,700;1,600;1,700&display=swap",
          },
          {
            name: "IBM Plex Mono",
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-s3",
      options: {
        /* TEST SITE DEPLOY */
        // bucketName: "lucky-moon-test",
        // protocol: "http",
        // hostname: "lucky-moon-test.s3-website-us-east-1.amazonaws.com/",

        /* PRODUCTION DEPLOY */
        bucketName: "luckymoontattoo",
        protocol: "https",
        hostname: "luckymoontattoo.com",
      },
    },
  ],
};

export default config;
