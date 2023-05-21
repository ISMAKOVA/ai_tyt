/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'purple': '#BDB4FF',
      'pink': '#EDB5F7',
      'orange': '#FFB985',
      'yellow': '#EAFC88',
      'yellow-light': '#FFFEEC',
      'gray-dark': '#141414',
      'gray': '#676767',
      'gray-light': '#CACACA',
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

