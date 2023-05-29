/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#302d43",
      secondary: "#6953f7",
      accent: "#cd4ff7",
      white: colors.white,
      slate: colors.slate,
      black: colors.black,
      red: colors.red,
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
