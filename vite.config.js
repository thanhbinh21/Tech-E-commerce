import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      '/apiUser': {
        target: 'https://67d6eb959d5e3a101529639b.mockapi.io/data/v1/User',
        

        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/apiUser/, '')
      },
      '/apiProduct': {
        //  target: 'https://67d6eb959d5e3a101529639b.mockapi.io/data/v1/Product',
          target: 'https://6831495b6205ab0d6c3bcc11.mockapi.io/products',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/apiProduct/, '')
      }
        
    }
  }
})
