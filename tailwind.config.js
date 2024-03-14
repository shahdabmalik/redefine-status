/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.jsx",
    "./src/**/*.jsx",
    "./src/**/**/*.jsx",
    "./src/**/**/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
        inter: ["Inter", "sans-serif"],
        abril: ["Abril Fatface", 'serif'],
      },
      backgroundImage: {
        'hero': "url('./src/assets/hero.webp')"
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

