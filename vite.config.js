// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer'; // Importar autoprefixer para compatibilidade entre navegadores

export default defineConfig({
  plugins: [react()], // Plugin do React
  css: {
    postcss: {
      plugins: [
        tailwindcss(),  // Plugin do Tailwind CSS
        autoprefixer(), // Plugin do Autoprefixer
      ],
    },
  },
  base: '/', // Certifique-se de que o caminho base está configurado corretamente
  server: {
    port: 5173, // Porta do servidor de desenvolvimento
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
    },
  },
});
