/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        transparent: 'transparent',
        'c-gray': {
          100: '#999999',
          200: '#141414',
          300: '#1D1D1D',
          400: '#272727',
          500:'#1D1D1D'
        },
        'c-orange':{
          100: '#FF9800'
        },
        'c-yellow' :{
          100: '#FFED6B',
          200:'#FF9800'
          
        },
        'c-red':{
          100: '#A60B6F',
          200: '#DB3F53',
        },
        'c-pink':{
          100: '#FF69B4'
          
        },
        'c-green':{
          100: '#55FC65'
        }
        


        // ...
      },
    }
    
  },
  plugins: [],
}