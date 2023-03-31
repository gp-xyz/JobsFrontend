// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
          link: 'var(--color-text-link)',
       
          
        }
      },
      backgroundColor : {
        skin: {
          fill: 'var(--color-fill)',
          bubble: 'var(--color-bubble)',
          nav: 'var(--color-nav)',
          
        }
      }
      
    },
  },
  variants: {},
  plugins: [],
};
