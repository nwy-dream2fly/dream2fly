/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <-- adjust this based on your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        montez: ["Montez", "cursive"],
        manrope: ["Manrope", "sans-serif"],
         mystery: ['"Mystery Quest"', 'cursive'],
        staatliches: ["Staatliches", "sans-serif"],
      },
    },
  },
  plugins: [],
};
