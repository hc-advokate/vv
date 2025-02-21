import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import viteCompression from "vite-plugin-compression";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 1024,
      algorithm: "gzip",
      ext: ".gz",
    }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto'
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "/index.html"),
      },
      output: {
        dir: "dist",
        // Static resource classification and packaging
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        compact: true,
        manualChunks: (id, { getModuleInfo }) => {
          const match = /.*\.strings\.(\w+)\.js/.exec(id);
          if (match) {
            const language = match[1]; // 例如 “en”
            const dependentEntryPoints = [];

            // 在这里，我们使用 Set 一次性处理每个依赖模块
            // 它可以阻止循环依赖中的无限循环
            const idsToHandle = new Set(getModuleInfo(id).dynamicImporters);

            for (const moduleId of idsToHandle) {
              const { isEntry, dynamicImporters, importers } =
                getModuleInfo(moduleId);
              if (isEntry || dynamicImporters.length > 0)
                dependentEntryPoints.push(moduleId);

              // Set 迭代器足够智能，可以处理
              // 在迭代过程中添加元素
              for (const importerId of importers) idsToHandle.add(importerId);
            }

            // 如果仅有一个入口，那么我们会根据入口名
            // 将它放到独立的 chunk 中
            if (dependentEntryPoints.length === 1) {
              return `${
                dependentEntryPoints[0].split('/').slice(-1)[0].split('.')[0]
              }.strings.${language}`;
            }
            // 对于多个入口，我们会把它放到“共享”的 chunk 中
            if (dependentEntryPoints.length > 1) {
              return `shared.strings.${language}`;
            }
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "#": path.resolve(__dirname, "./types"),
    },
  },
  server:{
    port: 5171,
    host:'0.0.0.0',
  },
})
