/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      spacing:{
        '73':'300px',
        '25':'200px'
      },
      fontFamily:{
        'besley': ["Besley", "serif"],
        'caudex':["Caudex", "serif"],
        'playfair':["Playfair Display", "serif"],
        'grotesk':["Space Grotesk", "sans-serif"],
        'bona':["Bona Nova SC", "serif"],
        'franklin':["Libre Franklin", "sans-serif"]
      },
      scale:{
        '130':"1.3"
      },
      colors:{
        'nav-sky':'#afffff',
        'sky':'#d9fcfc',
        'glow':'#a200ff',
        'gray':'#94a3b8',
        'nav-blue':'#0f172a',  
      },
    },
  },
  plugins: [],
  darkMode:"class",
}

