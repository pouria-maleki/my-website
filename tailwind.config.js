import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        fa: ['Vazirmatn', 'Tahoma', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 80px -30px rgba(59,130,246,.45)'
      }
    }
  },
  plugins: [typography]
}
