import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Alex_Pogrebnyak`,
    siteUrl: `http://localhost:8000`
  },
  graphqlTypegen: true,
  plugins:
  [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-transformer-remark",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "uploads",
        "path": `${__dirname}/static/uploads/`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        "path": `${__dirname}/data/`,
        "name": `data`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: ["Akony", "Montserrat"],
          urls: ["/fonts/fonts.css"]
        },
      },
    },
  ]
};

export default config;
