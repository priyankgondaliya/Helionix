/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040814',
          900: '#0B132B',
          800: '#1C2541',
          700: '#2A365C',
          600: '#3D4C7C',
        },
        cyan: {
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#00B4D8',
          600: '#0077B6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
