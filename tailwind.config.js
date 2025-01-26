/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/partials/**/*.hbs', // so Tailwind picks up classes in partials
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
