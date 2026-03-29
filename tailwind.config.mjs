/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        purple: '#4b2675',
        'purple-dk': '#321859',
        'purple-lt': '#c9b3e8',
        'purple-bg': '#f5f0fc',
        ink: '#1e1e24',
        paper: '#fafafa',
        muted: '#7a6a9a',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
