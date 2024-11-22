import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://motor-api-nine.vercel.app/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/ia': {
        target: 'http://127.0.0.1:8000/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/ia/, ''),
      },
    },
  },
});

