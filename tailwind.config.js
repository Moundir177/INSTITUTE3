import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        uk: {
          blue: '#00247D', // UK flag blue
          red: '#CF142B',  // UK flag red
          white: '#FFFFFF', // UK flag white
          gold: '#FFD700',  // Gold color
          silver: '#C0C0C0' // Silver color
        },
        dark: {
          uk: {
            blue: '#001A5C', // Darker UK flag blue for dark mode
            red: '#9F0F22',  // Darker UK flag red for dark mode
            gold: '#BFA000',  // Darker gold for dark mode
            silver: '#909090' // Darker silver for dark mode
          }
        }
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}; 