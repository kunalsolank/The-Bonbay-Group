import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from "vite-imagetools";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
 import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  resolve:{
     alias:{
      "@" :path.resolve(__dirname,'./src')
     }
  },
  plugins: [
    react(),
    tailwindcss(),
    imagetools(),
    ViteImageOptimizer({
      logStats: true,
      includePublic: true,
      png: { quality: 80, compressionLevel: 9 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 60 },
    }),
  ],
})
