module.exports = {
  siteMetadata: {
    title: `Hooks and Hamburgers`,
    description: `A Software Development blog by Nick Dambrosio`,
    author: `@iaaafm`,
    authorName: "Nick Dambrosio",
    siteUrl: `https://www.hooks-and-hamburgers.com`,
    repository: `https://github.com/30ozSteak/guard-and-grace`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hooks and Hamburgers`,
        short_name: `HooksHamburgers`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#121212`,
        display: `minimal-ui`,
        icon: `src/images/steak-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/daily`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify",
  ],
}
