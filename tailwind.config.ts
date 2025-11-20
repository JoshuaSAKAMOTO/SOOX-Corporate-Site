import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333',
        secondary: '#999',
        background: '#fff',
        'background-sub': '#f3f3f3',
      },
    },
  },
  plugins: [],
};

export default config;
