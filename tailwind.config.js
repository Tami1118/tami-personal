/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx, scss}",
    "./src/components/**/*.{vue, js, ts, jsx, tsx, scss}",
    "./src/views/*.{vue, js, ts, jsx, tsx, scss}",
    "./src/views/**/*.{vue, js, ts, jsx, tsx, scss}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ["Montserrat", "Noto Sans TC", "sans-serif"],
      },
      fontWeight: {
        '500': '500',
        '600': '600',
      },
      colors: {
        'primary': '#13ab67',
        'primary-80': '#04503A',
        'secondary': '#064B62',
      },
      fontSize: {
        '3':  '12px',
        '3h': '14px',
        '4':  '16px',
        '4h': '18px',
        '5':  '20px',
        '5h': '22px',
        '6':  '24px',
        '6h': '26px',
        '7':  '28px',
        '8':  '32px',
        '9':  '36px',
        '10': '40px',
        '12': '48px',
        '13': '52px',
        '16': '64px',
        '18': '72px',
        '24': '96px',
      },
    },
  },
  plugins: [],
}