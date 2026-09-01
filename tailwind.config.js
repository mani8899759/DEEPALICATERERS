/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF7F5',
        'surface-container-low': '#F3EBE3',
        'surface-container': '#EFE5DC',
        'surface-container-high': '#E5DACF',
        primary: '#473424',
        'on-background': '#473424',
        'on-surface-variant': '#6E5A4B',
        secondary: '#8C633C',
        'secondary-dark': '#5E4D2E',
        'secondary-light': '#F3EBE3',
        outline: '#473424',
        'outline-variant': 'rgba(71, 52, 36, 0.2)',
        'brand-gold': '#A87B4F',
        'brand-dark': '#473424',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        editorial: '0.2em',
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '32px',
        lg: '64px',
        xl: '128px',
        gutter: '24px',
        margin: '48px',
      }
    },
  },
  plugins: [],
}
