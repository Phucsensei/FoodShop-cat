/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          800: "#41200B",
          900: "#31170A",
          600: "#8F6940",
          500: "#A67C52",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
