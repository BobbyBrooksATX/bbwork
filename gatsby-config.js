require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Bobby Brooks",
    description: "Let's work together, here's my resume.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: ["@reflexjs/gatsby-theme-base"],
}
