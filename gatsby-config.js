module.exports = {
  siteMetadata: {
    title: "KAZUMA WADA",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",//plugin for blog post
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
    }
  },
  "gatsby-plugin-mdx",
  ],
};