/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      ...colors
    },
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [
  ],
}

