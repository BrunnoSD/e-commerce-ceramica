/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'Poppins',
      },
      padding: {
        '5px': '5px',
        '1px': '1px',
      },
      colors: {
        'principal': '#7D6C4F',
        'segundo': '#F2F1F0',
        'hover': '#736049'
      },
      inset: {
        '152': '152px'
      },
      height: {
        'meio': '65vh',
        'pfooter': '100vh',
        'footer': '600px',
        'about': '130vh'
      },
      scale: {
        '102': '1.02'
      },
      screens: {
        '3xl': '1720px',
      },
    },
  },
  plugins: [],
}