/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',

  content: ["./templates/**/*.html",
      "./static/**/*.js",
      "./static/**/*.css"],
  theme: {
    extend: {},
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    }
  },
  
  plugins: [],
}
