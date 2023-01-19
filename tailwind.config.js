/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'bp': "900px",
      }
    },
    fontFamily: {
      noto: ['Noto Serif Toto'],
      montserrat: ['Montserrat'],
      poppins: ['Poppins'],
      source: ['Source Code Pro'],
      DMSans: ['DM Sans'],
    }
  },
  plugins: [],
}
