
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: { 
    outDir: 'dist', 
    emptyOutDir: true,
    lib: { 
      entry: 'src/module.client.jsx', 
      name: 'CompiledModule', 
      fileName: () => 'module.client.js', 
      formats: ['es'] 
    },
    rollupOptions: { 
      // THE FIX: Externalize React, Icons, and ALL your custom Rudra libraries!
      external: [
        'react', 
        'react-dom', 
        'react/jsx-runtime',
        'lucide-react',
        /^@rudra-studio\/.*/
      ], 
      output: { 
        assetFileNames: "styles.css" 
      } 
    }
  }
});