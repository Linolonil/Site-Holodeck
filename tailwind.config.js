// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Inclua todos os arquivos relevantes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // Exemplo de cor primária
        accent: '#ffed4a',  // Exemplo de cor de acento
      },
    },
  },
  plugins: [],
};
