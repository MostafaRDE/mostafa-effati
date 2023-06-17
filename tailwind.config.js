/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-gradient-primary',
    'text-gradient-primary-bold',
    'hover:text-gradient-primary',
    'hover:text-gradient-primary-bold',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary-to-b': "linear-gradient(to bottom, #f1b8d2, #95bbe9)",
        'gradient-primary-to-252': "linear-gradient(252deg, #f1b8d2, #95bbe9)",
        'gradient-primary-bold-to-252': "linear-gradient(252deg, #ef85b4, #5f9de9)",
      },
      boxShadow: {
        'header': '4px 4px 100px 4px rgba(0, 0, 0, 0.25)',
        'portfolio': '4px 4px 50px 4px rgba(0, 0, 0, 0.25)',
      },
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
      },
    },
    fontSize: {
      sm: '0.75rem',
      base: '0.875rem',
      xl: '1rem',
      '2xl': '1.25rem',
      '3xl': '1.563rem',
      '4xl': '1.953rem',
      '5xl': '2.441rem',
      '6xl': '3.052rem',
    }
  },
  plugins: [],
}
