/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../libs/components/tailwind.config')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '835px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      container: {
        center: true,
        screens: {
          none: '100%',
          sm: '640px',
          md: '1000px',
          lg: '1300px',
        },
        padding: {
          DEFAULT: '1.20rem',
          sm: '0.5rem',
        },
      },
      fontFamily: {
        mono: ['Montserrat', 'sans-serif'],
        gotham: ['Gotham Rounded Book', 'sans-serif'],
        gothamM: ['Gotham Rounded', 'sans- serif'],
        gothamL: ['Gotham Rounded Light', 'sans-serif'],
        gothamB: ['Gotham Rounded Bold', 'sans-serif'],
        impact: ['Impact', 'sans-serif'],
      },
      fontSize: {
        xxs: ['10px', { lineHeight: '1rem' }],
        xs: ['12px', { lineHeight: '1rem' }],
        sm: ['14px', { lineHeight: '1rem' }],
        base: ['16px', { lineHeight: '1.25rem' }],
        base2: ['18px', { lineHeight: '1.25rem' }],
        md: ['20px', { lineHeight: '1.25rem' }],
        lg: ['24px', { lineHeight: '1.6rem' }],
        xl: ['28px', { lineHeight: '1.6rem' }],
        '2xl': ['32px', { lineHeight: '1.6rem' }],
      },
    },
  },
  plugins: [],
};
