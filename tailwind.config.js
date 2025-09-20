/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f7f9f7',
          100: '#e8f0e8',
          200: '#d1e1d1',
          300: '#b3d1b3',
          400: '#8fb88f',
          500: '#6b9e6b',
          600: '#5a855a',
          700: '#4a6b4a',
          800: '#3d563d',
          900: '#334633',
        },
        gold: {
          50: '#fdfaf6',
          100: '#fbf3e7',
          200: '#f7e6cf',
          300: '#f1d4a9',
          400: '#e9bb7a',
          500: '#e0a14b',
          600: '#d48a3c',
          700: '#b6702f',
          800: '#945928',
          900: '#7a4923',
        },
        charcoal: '#2d3748',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
