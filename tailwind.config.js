const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./containers/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        "11": "3rem",
        "12": "3.5rem",
      },
      fontSize: {
        tiny: "0.94rem"
      },
      container: {
        center: true,
        padding: "1.5rem"
      },
      colors: {
        blueGray: colors.blueGray
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
