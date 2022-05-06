module.exports = {
  mode : 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing : {
        '0.1' : '0.063rem'
      },
      colors : {
        'brand-color' : '#4c3398',
        'primary-brand-color' : '#5d3ebc',
        'secondary-brand-color' : '#7849f7',
        'brand-yellow' : '#ffd300'
      },
    },
  },
  variants : {
    extend : {
      color: ['before']
    },
  },
  plugins: [],
}
