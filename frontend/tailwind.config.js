/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./index.html",
    "./src/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'transparent-custom': '#000000b5'
      },
    },
    

  },
  plugins: [
    require('flowbite/plugin'),

  ],
  variants: {
    extend: {
      // ...
     borderStyle: ['hover'],
    }
  }
}