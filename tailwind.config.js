/** @type {import('tailwindcss').Config} */
const conf = {
  content: {
    relative: true,
    files: ['./site/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx,mdx}'],
  },
  prefix: 'n-',
  theme: {
    extend: {
      // borderRadius: {
      //   DEFAULT: 'var(--border-radius-base)',
      // },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

module.exports = conf;
