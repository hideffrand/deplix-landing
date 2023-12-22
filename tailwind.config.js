/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'deplix-red': '#f91919',
        'deplix-orange': '#ffb300',
        'deplix-black': '#0f0f0f',
      },
      fontSize: {
        '7xl': '6.5rem',
        '10xl': '12.5rem'
      },
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

