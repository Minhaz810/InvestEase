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
      hover:"#3A4B7A",
      textBlack: '#000000',
      subheadingGray: '#4A4A4A',
      danger:"#ef4444",
      subheadingLightGray: '#949090',
    },
    fontSize: {
      primaryHeader: '48px',
      subHeader:'24px'
    },
  },
  plugins: [],
}