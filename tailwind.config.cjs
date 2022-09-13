/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "767px",
        md: "960px",
        lg: "1440px",
      },
      colors: {
        brown: "#7B583D",
        grey: "rgba(0, 0, 0, 0.7);",
        black: "#1E3D58",
        active: "#D9D9D9",
      },
      fontFamily: {
        primary: ["'Readex Pro'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
