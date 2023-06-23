/** @type {import('tailwindcss').Config} */

module.exports = {
  
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1891b2",
        secondary: "#b2512a",
        tertiary: "#FAFBFE",
      },
    },
  },
  
  plugins: [],
};
