module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
    colors: {
      c0: '#000',
      c9: '#999',
      c6: '#666',
      white: '#fff'
    },
    spacing: {
      12: '12px',
      18: '18px',
      10: '10px',
      15: '15px',
      50: '50px'
    },
    fontSize: {
      12: ['12px', { lineHeight: '16px' }],
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
