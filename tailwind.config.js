/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    colors: {
      'primary':"#CC2D4A",
      'secondary':"#8FA206",
      'tertiary':"#61AEC9",
      'white':"#FFF",
      'black':"#000",
      'gray-50': "#f9fafb",
      'gray-300': "#d1d5db",
      'gray-600': "#4b5563",
      'gray-700': "#374151",
      'gray-800': "#1f2937",
      'gray-900': "#111827"
    },
    fontFamily: { 
      Montserrat: ["Monserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('../img/yosemite.jpg')",
			  'LA': "url('../img/LA.jpg')",
			  'seattle': "url('../img/seattle.jpg')",
			  'new_york': "url('../img/new_york.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'sydney': "url('../img/sydney.jpg')",
			  'miami': "url('../img/miami.jpg')",
			  'switzerland': "url('../img/switzerland.jpg')",
			  'bali': "url('../img/bali.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'chicago': "url('../img/chicago.jpg')",
			  'europe': "url('../img/europe.jpg')",
			  'iceland': "url('../img/iceland.jpg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
