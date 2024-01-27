/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {  
      colors:{
      'background':'var(--background)',
      'foreground':'var(--foreground)',
      'accent1':'var(--accent1)',
      'accent2':'var(--accent2)',
      'accent3':'var(--accent3)',
      'accent4':'var(--accent4)',
      'accent5':'var(--accent5)',
      'accent6':'var(--accent6)',
      'accent7':'var(--accent7)',
      'accent8':'var(--accent8)',
      },
      spacing:{
        '1':'4px',
        '2':'8px',
        '3':'12px',
        '4':'16px',
        '5':'24px',
        '6':'32px',
        '7':'45px',
        '8':'64px',
        '9':'96px',
        '10':'128px',
        '11':'192px',
        '12':'256px',
      },
      screens: {
        'xsm': '450px',

        'sm': '600px',
  
        'md': '760px',
  
        'lg': '1020px',
  
        'xl': '1280px',
  
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}
