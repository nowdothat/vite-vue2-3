import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }  
  },
  server: {
    proxy: {
      '/web/api/': {
        target: 'https://article.tryclean.cn/',
        // target: 'http://127.0.0.1:3002/'
        changeOrigin: true,
      }
    },
  }
})
