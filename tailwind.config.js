const tailwindLineClamp = require('@tailwindcss/line-clamp');

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.js',
    './layouts/**/*.js',
    './pages/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    tailwindLineClamp,
  ],
};
