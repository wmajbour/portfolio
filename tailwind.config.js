export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],

  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#8B5CF6',
          light: '#D8B4FE',
          dark: '#6D28D9'
        }
      }
    },
  },
  plugins: [],
}
