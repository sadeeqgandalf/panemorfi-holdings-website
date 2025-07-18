import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  optimizeDeps: {
    exclude: ['lucide-react'],
  },

  build: {
    sourcemap: true,
    outDir: 'dist',
  },

  server: {
    port: 5173,
    open: true,
  },

  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});