/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        montez: ["Montez", "cursive"],
        manrope: ["Manrope", "sans-serif"],
        mystery: ['"Mystery Quest"', 'cursive'],
        staatliches: ["Staatliches", "sans-serif"],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        flyDiagonal: {
          '0%': { transform: 'translate(-50%, 0)' }, // Center start
          '100%': { transform: 'translate(45vw, -200px)' }, // Diagonal movement
        },
      },
      animation: {
        'fly-diagonal': 'flyDiagonal 6s linear infinite',
      },
    },

  },
  plugins: [],
};
