module.exports = {
  siteMetadata: {
    title: "lucadebort",
    description: "ux designer and semiotician",
    url: "https://lucadebort.com",
    image: "/images/icon.png",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/projects`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: 'gatsby-source-medium',
      options: {
        username: '@lucadebort',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luca De Bortoli`,
        short_name: `lucadebort`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
  flags: {
    THE_FLAG: false
  }
};
