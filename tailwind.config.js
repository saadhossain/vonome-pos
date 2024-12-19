/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#149e85',
        'secondary': '#8d8d8d',
        'info': '#6182ff',
        'danger': '#fe6e6e',
        'success': '#34a54d',
        'warning': '#fdb400',
        'pink': '#ef5da8',
        'typo': '#292929',
        'background': '#fafafa'
      }
    },
  },
  plugins: [],
};