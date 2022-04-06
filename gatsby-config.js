require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.GATSBY_STRAPI_API_URL,
  accessToken: process.env.GATSBY_STRAPI_TOKEN,
  collectionTypes: [
    'accommodation',
    'event',
    `booking`,
    'image-collection',
    'post',
    'product',
    'user',
  ],
  singleTypes: ['about', 'inventory', 'guideline'],
}

module.exports = {
  siteMetadata: {},
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
  // proxy: {
  //   prefix: "/*",
  //   url: process.env.GATSBY_STRAPI_API_URL,
  // },
}
