/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#1C1B1F',
        surface: '#2B2930',
        primary: '#D0BCFF',
        'on-primary': '#381E72',
        text: '#E6E1E5',
        outline: '#938F99'
      }
    }
  },
  plugins: []
}