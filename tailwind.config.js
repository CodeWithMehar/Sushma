/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        supra: ['Supra', 'sans-serif'], // Adding Supra to the fontFamily
      },
      fontSize: {
        'supra-xl': '50px', // Define a custom font size for Supra
      },
    },
  },
  plugins: [

    require('tailwind-scrollbar'),
  ],
}
