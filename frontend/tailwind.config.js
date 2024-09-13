/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
    colors:{
      backgroundWhite: '#FFFFFF',
      cardLight: '#F4E8E8',
      cardDark: '#2D3C62',
      textBlack: '#000000',
      subheadingGray: '#4A4A4A',
      subheadingLightGray: '#949090',
    }
  },
  plugins: [],
}