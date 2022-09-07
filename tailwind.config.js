/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryC': '#800020',
      },
      height: {
        'heroHeight': 'calc(100vh-100px)',
      }
    },
    
  },
  plugins: [
  ],
}
