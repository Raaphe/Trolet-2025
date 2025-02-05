import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        entryFileNames: "assets/main.js",
      },
    }
  }
})
