import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun';
import { name } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    qiankun(name, {
      useDevMode: true,
    })
  ],
  server: {
    port: 8888,
    cors: true,
  }
})
