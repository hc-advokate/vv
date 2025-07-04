import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteFlexibleInject } from 'postcss-px-convert';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    viteFlexibleInject({ flexibleScriptPath: '/flexible.js' }), // 路径与生成 flexible.js 保持一致
  ],
})
