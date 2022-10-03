module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"'],
        cinzel: ['Cinzel']
      },
      screens: {
        'landscape': '820px'
      }
    },
  },
  plugins: [],
}
