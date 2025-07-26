/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Futuristic color palette
        'void-black': '#000000',
        'midnight-blue': '#0a0a1a',
        'carbon-dark': '#0d0d0d',
        'steel-gray': '#1a1a2e',
        'electric-gold': '#d4af37',
        'cyber-purple': '#8b5cf6',
        'plasma-green': '#10b981',
        'hologram-pink': '#ec4899',
        'neon-blue': '#3b82f6',
        'quantum-cyan': '#06b6d4',
        'neural-orange': '#f97316',
        'matrix-green': '#22c55e',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'scan-line': 'scan-line 2s linear infinite',
        'fade-in-slide-up': 'fade-in-slide-up 0.8s ease-out forwards',
        'holographic-flicker': 'holographic-flicker 3s ease-in-out infinite',
        'digital-glitch': 'digital-glitch 0.3s ease-in-out',
        'energy-flow': 'energy-flow 3s linear infinite',
        'orbital-rotation': 'orbital-rotation 20s linear infinite',
        'neural-pulse': 'neural-pulse 2s ease-in-out infinite',
        'quantum-shift': 'quantum-shift 4s ease-in-out infinite',
        'cyber-glow': 'cyber-glow 2s ease-in-out infinite alternate',
        'matrix-rain': 'matrix-rain 10s linear infinite',
        'hologram-wave': 'hologram-wave 3s ease-in-out infinite',
        'data-stream': 'data-stream 5s linear infinite',
        'ticket-hover': 'ticket-hover 0.6s ease-in-out',
        'float-gentle': 'float-gentle 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 0 5px rgba(212, 175, 55, 0.5), 0 0 10px rgba(212, 175, 55, 0.3), 0 0 15px rgba(212, 175, 55, 0.1)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 10px rgba(212, 175, 55, 0.8), 0 0 20px rgba(212, 175, 55, 0.6), 0 0 30px rgba(212, 175, 55, 0.4)',
            transform: 'scale(1.02)'
          },
        },
        'scan-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-in-slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'holographic-flicker': {
          '0%, 100%': { opacity: '1', filter: 'hue-rotate(0deg)' },
          '50%': { opacity: '0.8', filter: 'hue-rotate(90deg)' },
        },
        'digital-glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'energy-flow': {
          '0%': { transform: 'translateX(-100%) scaleX(0)' },
          '50%': { transform: 'translateX(0%) scaleX(1)' },
          '100%': { transform: 'translateX(100%) scaleX(0)' },
        },
        'orbital-rotation': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'neural-pulse': {
          '0%, 100%': { 
            opacity: '0.6',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.1)',
          },
        },
        'quantum-shift': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            filter: 'hue-rotate(0deg)',
          },
          '25%': { 
            transform: 'translateY(-10px) rotate(90deg)',
            filter: 'hue-rotate(90deg)',
          },
          '50%': { 
            transform: 'translateY(0px) rotate(180deg)',
            filter: 'hue-rotate(180deg)',
          },
          '75%': { 
            transform: 'translateY(10px) rotate(270deg)',
            filter: 'hue-rotate(270deg)',
          },
        },
        'cyber-glow': {
          '0%': { 
            textShadow: '0 0 5px rgba(212, 175, 55, 0.5), 0 0 10px rgba(212, 175, 55, 0.3)',
          },
          '100%': { 
            textShadow: '0 0 10px rgba(212, 175, 55, 0.8), 0 0 20px rgba(212, 175, 55, 0.6), 0 0 30px rgba(212, 175, 55, 0.4)',
          },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'hologram-wave': {
          '0%, 100%': { 
            transform: 'translateX(0%) skewX(0deg)',
            opacity: '0.7',
          },
          '50%': { 
            transform: 'translateX(100%) skewX(5deg)',
            opacity: '1',
          },
        },
        'data-stream': {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '50%': { 
            opacity: '1',
          },
          '100%': { 
            transform: 'translateX(100%)',
            opacity: '0',
          },
        },
        'ticket-hover': {
          '0%': { 
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
          },
          '50%': { 
            transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.02)',
            boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)',
          },
          '100%': { 
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.05)',
            boxShadow: '0 12px 35px rgba(212, 175, 55, 0.6)',
          },
        },
        'float-gentle': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': { 
            transform: 'translateY(-10px) rotate(2deg)',
          },
        },
        'glow-pulse': {
          '0%': { 
            boxShadow: '0 0 5px rgba(212, 175, 55, 0.3), 0 0 10px rgba(212, 175, 55, 0.2)',
          },
          '100%': { 
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.6), 0 0 25px rgba(212, 175, 55, 0.4), 0 0 35px rgba(212, 175, 55, 0.2)',
          },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 5px rgba(212, 175, 55, 0.5)',
        'glow': '0 0 10px rgba(212, 175, 55, 0.5), 0 0 20px rgba(212, 175, 55, 0.3)',
        'glow-lg': '0 0 15px rgba(212, 175, 55, 0.6), 0 0 30px rgba(212, 175, 55, 0.4)',
        'glow-purple': '0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-green': '0 0 10px rgba(16, 185, 129, 0.5), 0 0 20px rgba(16, 185, 129, 0.3)',
        'glow-blue': '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
        'cyber-inset': 'inset 0 0 10px rgba(212, 175, 55, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        'cyber': '0.5rem 0.125rem 0.5rem 0.125rem',
        'quantum': '1rem 0.25rem 1rem 0.25rem',
      },
    },
  },
  plugins: [],
};