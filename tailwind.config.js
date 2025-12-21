/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New CSS variable-based theme colors
        background: 'var(--background-color)',
        surface: 'var(--surface-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        border: 'var(--border-color)',
        accent: 'var(--accent-color)',
        // Legacy primary scale (keep for compatibility if needed)
        'primary-scale': {
          50: '#fffbf0',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Brand colors mapped to CSS variables for backward compatibility
        brand: {
          gold: 'var(--primary-color)',
          'gold-dark': 'var(--secondary-color)',
          black: 'var(--background-color)',
          'gray-dark': 'var(--surface-color)',
          white: 'var(--text-primary)',
          'gray-light': 'var(--text-secondary)',
          'gray-muted': 'var(--text-muted)',
          indigo: '#6366F1',
          cyan: '#22D3EE',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 3s ease infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px var(--primary-color), 0 0 10px var(--primary-color), 0 0 15px var(--primary-color)' },
          '100%': { boxShadow: '0 0 10px var(--primary-color), 0 0 20px var(--primary-color), 0 0 30px var(--primary-color)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-gold': 'var(--gradient-primary)',
      },
    },
  },
  plugins: [],
} 