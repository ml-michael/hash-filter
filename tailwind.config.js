const flagger = require("tailwind-flagger");

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html,pug}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [flagger, require("tailwind-hamburgers")],
};
