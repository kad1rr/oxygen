/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkPrimary: '#181818',
        darkSecondary: '#1C1C1C',
        primary: '#312EB5',
      },
      fontFamily: {
        primary: 'Kaushan Script'
      }
    },
  },
  plugins: [],
}
