/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        theme: '1200px',
      },
      fontFamily: {
        theme: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
};
