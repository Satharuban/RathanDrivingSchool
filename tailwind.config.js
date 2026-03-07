/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#E60000',
          'red-hover': '#CC0000',
          'red-light': '#FEE2E2',
          green: '#00B300',
          'green-hover': '#009900',
          'green-light': '#DCFCE7',
        },
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0,0,0,0.1), 0 4px 15px -3px rgba(0,0,0,0.05)',
        'card': '0 4px 6px -1px rgba(0,0,0,0.06), 0 10px 25px -5px rgba(0,0,0,0.08)',
        'card-hover': '0 20px 50px -12px rgba(0,0,0,0.15), 0 8px 20px -8px rgba(0,0,0,0.08)',
        'glow-red': '0 0 40px -5px rgba(230,0,0,0.2)',
        'nav': '0 1px 3px 0 rgba(0,0,0,0.05), 0 4px 12px -2px rgba(0,0,0,0.04)',
        'inner-top': 'inset 0 1px 0 0 rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'mesh': 'radial-gradient(at 40% 20%, rgba(230,0,0,0.06) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(0,179,0,0.04) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(0,0,0,0.03) 0px, transparent 50%)',
        'hero-shape': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 100%)',
        'stripes': 'repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(230,0,0,0.03) 8px, rgba(230,0,0,0.03) 16px)',
        'gradient-radial-red': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(230,0,0,0.12) 0%, transparent 70%)',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}
