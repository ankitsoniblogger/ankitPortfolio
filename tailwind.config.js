/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      darkGreen: "#1B2B1C",
      lightGreen: "#BFF101",
      black: "#050505",
      white: "#ffffff",
    },
    fontFamily: {
      jack: ["Plus Jakarta Sans"],
    },
  },
  plugins: [],
};