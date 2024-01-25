/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#301D9A',
        'secondary': '#758BFD',
        'third':'#AEB8FE',
        'aux':'#F1F2F6',
      }
    },
  },
  plugins: [],
}

