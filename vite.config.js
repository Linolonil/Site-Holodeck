// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Certifique-se de que o caminho base está configurado corretamente
  server: {
    port: 5173, // Porta do servidor de desenvolvimento
  },
  resolve: {
    alias: {
      // Exemplo de alias
      '@components': '/src/components',
      '@assets': '/src/assets',
    },
  },
});
