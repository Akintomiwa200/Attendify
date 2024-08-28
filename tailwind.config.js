/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        move: 'move 5s linear infinite',
      },
      keyframes: {
        move: {
          '0%, 100%': { color: '#ff0000' },
          '50%': { color: '#00ff00' }
        }
      }
    },
  },
  plugins: [],
}