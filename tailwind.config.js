/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      accent: "hsl(233, 26%, 24%)",
      "accent-dark": "#181621",
      secondary: "hsl(192, 70%, 51%)",
      primary: "hsl(136, 65%, 51%)",
      white: colors.white,
      slate: colors.slate,
      black: colors.black,
      red: colors.red,
      green: colors.green,
      amber: colors.amber,
      transparent: colors.transparent,
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
