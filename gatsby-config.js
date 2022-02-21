module.exports = {
  siteMetadata: {
    title: `Bernadette Abalos`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ]
};