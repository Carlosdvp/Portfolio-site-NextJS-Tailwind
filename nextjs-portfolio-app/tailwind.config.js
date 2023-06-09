/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-mont'],
      },
      colors: {
        dark: "#006675",
        light: "#4ADFF7",
        primary: "#00D4F5",
        primaryDark: "#236A75",
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #236A75 5px, #236A75 100px)'
      }
    },
  },
  plugins: [],
}
