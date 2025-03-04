/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jelly-bean': 'var(--jelly-bean)',
        'texas-rose': 'var(--texas-rose)',
        'bittersweet': 'var(--bittersweet)',
        'acquamarine': 'var(--acquamarine)',
        'pelorus': 'var(--pelorus)',
      },
    },
  },
  plugins: [],
} 