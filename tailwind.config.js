/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      accent: "#302d43",
      "accent-dark": "#181621",
      secondary: "#6953f7",
      primary: "#cd4ff7",
      white: colors.white,
      slate: colors.slate,
      black: colors.black,
      red: colors.red,
      green: colors.green,
      amber: colors.amber,
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
