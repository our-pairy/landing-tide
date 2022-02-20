module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'fade-in-bottom': 'fadeInBottom 1s ease-out',
      },
      keyframes: {
        'fadeInBottom': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          }
        }
      }
    },
  },
  plugins: [],
}
