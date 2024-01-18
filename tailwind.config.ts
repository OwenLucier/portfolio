import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'c-md': '6px 6px 10px -1px rgba(0, 0, 0, 0.7)',
        'i-md': 'inset 6px 6px 10px -1px rgba(0, 0, 0, 0.7)',
      },
      border: {
        'dasha': 'dash-array: 450;',
        'dasho': 'dash-offset: 450;',
    },
  },
  plugins: [],
}
}
export default config
