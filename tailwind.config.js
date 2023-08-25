/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        deepColor: '#0A2A5A',
        lightColor: '#1363DF',
        lightText: '#c4cfde',
        designColor: '#E7EFFC',
        hoverColor: "rgba(244, 63, 94, 0.15)"
      },
      boxShadow: {
        shadowOne: '10px 10px 15px 5px rgba(0,0,0,0.5), -10px -10px 38px -4px rgba(255,255,255,0.05)'
      }
    },
  },
  plugins: [require("daisyui")],
}

