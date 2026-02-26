/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        kanban: {
          black: '#000112',
          white: '#FFFFFF',
          purple: '#635FC7',
          purpleHover: '#A8A4FF',
          red: '#EA5555',
          redHover: '#FF9898',
          greyMedium: '#828FA3',
          greyDark: '#2B2C37',
          greyVeryDarkBg: '#20212C',
          lineDark: '#3E3F4E',
          lineLight: '#E4EBFA',
          bgLight: '#F4F7FD',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#2B2C37',
        },
        text: {
          primaryLight: '#000112',
          primaryDark: '#FFFFFF',
          muted: '#828FA3',
        },
      },
      fontSize: {
        'heading-xl': ['1.5rem', { lineHeight: '1.875rem', fontWeight: '700' }],
        'heading-l': ['1.125rem', { lineHeight: '1.4375rem', fontWeight: '700' }],
        'heading-m': ['0.9375rem', { lineHeight: '1.1875rem', fontWeight: '700' }],
        'heading-s': ['0.75rem', { lineHeight: '0.9375rem', letterSpacing: '0.15rem', fontWeight: '700' }],
        'body-l': ['0.8125rem', { lineHeight: '1.4375rem', fontWeight: '500' }],
        'body-m': ['0.75rem', { lineHeight: '0.9375rem', fontWeight: '700' }],
      },
      borderRadius: {
        ui: '1.25rem',
        'ui-lg': '1.5rem',
      },
    },
  },
  plugins: [],
}
