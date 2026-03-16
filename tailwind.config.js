/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        endzone: {
          50: '#edfcf2',
          100: '#d3f9e0',
          200: '#aaf0c6',
          300: '#73e3a5',
          400: '#3acd7e',
          500: '#16b364',
          600: '#0a9150',
          700: '#087442',
          800: '#095c37',
          900: '#084c2f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
};
