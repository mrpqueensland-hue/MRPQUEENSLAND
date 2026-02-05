/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Anton', 'sans-serif'],
        'body': ['Public Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        primary: {
          DEFAULT: '#FF3B30',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#F5A623',
          foreground: '#000000',
        },
        muted: {
          DEFAULT: '#2a2a2a',
          foreground: '#b3b3b3',
        },
        accent: {
          DEFAULT: '#FF3B30',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#FF3B30',
          foreground: '#ffffff',
        },
        border: 'rgba(255, 255, 255, 0.2)',
        input: '#2a2a2a',
        ring: '#FF3B30',
      },
      borderRadius: {
        DEFAULT: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '0',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
