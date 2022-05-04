module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        'brand-color' : '#5d3ebc'
      })
    },
  },
  plugins: [],
}
