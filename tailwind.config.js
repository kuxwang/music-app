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
      white: '#fff',
      red: '#dd001b'
    },
    spacing: {
      4: '4px',
      5: '5px',
      8: '8px',
      12: '12px',
      16: '16px',
      10: '10px',
      20: '20px',
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
