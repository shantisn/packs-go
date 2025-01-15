/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1170px',
    },
      fontFamily: {
        'pop': ['popins'],
    },
    colors: {
      'piimary': '#1E1E1E',
      'secondary': '#007F5F',
      'third': '#616161',
      },
    
  },
  plugins: [],
}

}
