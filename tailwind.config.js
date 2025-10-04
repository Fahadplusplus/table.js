/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          // include your main html file
    "./src/**/*.{js,ts,jsx,tsx}", // if you're using React/Vue etc.
    "./**/*.html"            // if your html files are in subfolders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
