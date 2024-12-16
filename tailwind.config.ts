import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#009B77',  // South African green
          light: '#00b88d',
          dark: '#007a5e',
        },
        secondary: {
          DEFAULT: '#222',
          light: '#2d2d2d',
          dark: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#FFB90F',  // Warm African sun
          light: '#ffc83d',
          dark: '#cc9400',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-custom': 'bounce 1s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;