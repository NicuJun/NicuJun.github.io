/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        xs: {
          black:  '#080808',
          dark:   '#101010',
          card:   '#181818',
          border: '#252525',
          muted:  '#777777',
          light:  '#bbbbbb',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        fadeUp:  { from: { opacity: '0', transform: 'translateY(32px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        floatY:  { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        pulse2:  { '0%,100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'float':   'floatY 5s ease-in-out infinite',
        'pulse2':  'pulse2 2s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}
