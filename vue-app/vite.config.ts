import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankunPlugin from 'vite-plugin-qiankun';
import { name } from './package.json';

const port = 9999; // dev port
const useDevMode = true; // 是否使用开发模式

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    qiankunPlugin(name, { useDevMode })
  ],
  server: {
    port,
    cors: true,
  },
  // 生产模式下依旧不支持 publicPath, 需要将 vite.config.js 中 base 配置写死【致使多环境部署不便捷】
  base: mode === 'development' ? '/' : `http://127.0.0.1:${port}/`,
}))
