/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg": "url(./src/assets/bg.jpg)"
      },
      backgroundColor: {
        "backgroundCard": "#0000003b",
        "backgroundButton": "#0000009c"
      }
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif']
    },
    screens: {
      titleRes: "390px"
    }
  },
  plugins: [],
}
