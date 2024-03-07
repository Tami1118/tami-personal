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
    extend: {},
  },
  plugins: [],
}