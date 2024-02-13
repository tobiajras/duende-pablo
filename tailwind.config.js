/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00b889',
        'primary-light': '#b2fe63',
        'primary-dark': '#00796e',
        'background-primary': '#0a0a0b',
        'background-light': '#121213',
        'text-primary': '#ffff',
        'text-secondary': '#96969f',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
