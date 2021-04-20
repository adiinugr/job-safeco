module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "safeco-pimary": "#95A054",
        "safeco-gray": "#ECE8E5",
      },
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
