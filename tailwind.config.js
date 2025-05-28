/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#20B2AA',
          light: '#48D1CC',
          dark: '#008B8B',
        },
        secondary: {
          DEFAULT: '#2F4F4F',
          light: '#3D6B6B',
          dark: '#1A2F2F',
        },
      },
    },
  },
  plugins: [],
} 