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
    },
    spacing: {
      12: '12px',
      18: '18px',
      10: '10px',
      15: '15px'
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
