/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'navbar-theme' : '#003D7A',
        'deptBtnColor' : '#257dad',
        'deptBtnColorHover' : '#1D5F83',
      },
      spacing: {
        '128':'32rem',
      }
    },
  },
  plugins: [require('daisyui')],
}
