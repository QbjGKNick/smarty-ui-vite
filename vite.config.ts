import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'

const rollupOptions = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

export default defineConfig({
  plugins: [
    vue(),
    // 添加 JSX 插件
    vueJsx(),
    // 添加 Unocss 插件
    Unocss()
  ],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'SmartyUI',
      // 导出模式
      formats: ['es', 'umd', 'iife']
    },
    cssCodeSplit: true // 控制独立输出 css
  }
})
