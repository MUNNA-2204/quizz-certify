import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'firebase-config': path.resolve(__dirname, './firebase-config.js')
    }
  },
  server: {
    proxy: {
      // Proxy all /api requests to backend
      '/api': {
        target: 'http://localhost:3001', // Your backend port
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false
      }
    }
  },
  optimizeDeps: {
    include: [
      'monaco-editor > monaco-editor-core',
      '@google/generative-ai' // If using client-side Gemini (not recommended)
    ]
  },
  
  
});