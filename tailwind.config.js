/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
