/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

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
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
