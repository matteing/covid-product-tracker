// postcss.config.js
const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    // Specify the paths to all of the template files in your project
    content: [
      "./**/*.html",
      "./**/*.vue",
      "./**/*.jsx",
      "./**/*.js"
      // etc.
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
];

module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    process.env.NODE_ENV === "production" ? purgecss : []
  ]
};
