// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'gray-900': '#1a202c',
        'gray-800': '#2d3748',
        'gray-700': '#4a5568',
        'gray-400': '#cbd5e0',
        'purple-500': '#6b46c1',
        'purple-600': '#553c9a',
        'purple-400': '#9f7aea',
        'orange-500': '#ed8936',
        'orange-600': '#dd6b20',
        'blue-500': '#3182ce',
        'black': '#000000',
        'white': '#ffffff',
      },
      width: {
        'auto': 'auto',
        'full': '100%',
      },
    },
  },
  variants: {},
  plugins: [],
}
