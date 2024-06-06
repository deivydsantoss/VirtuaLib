/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "library": "url('/assets/img-library.jpg')"
      },
    },
  },
  plugins: [],
}

