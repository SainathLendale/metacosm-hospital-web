// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       'lucide-react': require.resolve('lucide-react'),
//     },
//   },
// })



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",  // Use relative paths for assets
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // Ensures routing works
  },
  resolve: {
    alias: {
      'lucide-react': fileURLToPath(
        new URL('node_modules/lucide-react', import.meta.url)
      ),
    },
  },
});
