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
        'xs': '400px',
        'landscape': '820px'
      },
      fontSize: {
        'navland': ['1rem', '2rem']
      }
    }
  },
  plugins: [],
}
