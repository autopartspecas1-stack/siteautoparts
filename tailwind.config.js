/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'autoparts-navy': '#1C2E45',
        'autoparts-red': '#D62828',
        'autoparts-silver': '#C0C0C0',
        'autoparts-white': '#FFFFFF',
        'autoparts-black': '#222222',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
