/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        // Priority: Custom Belion -> DM Serif Display (Google) -> Serif Fallback
        display: ['Belion', 'DM Serif Display', 'Playfair Display', 'serif'],
      },
      colors: {
        slate: {
          850: '#1e293b', // Deep credible dark
          900: '#0f172a',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}