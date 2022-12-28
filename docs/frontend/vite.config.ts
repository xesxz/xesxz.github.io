/* 
  1.由于node.js暂不支持ts，需要先安装@types/node，才能使用path模块
  2.npm install @types/node -D 
  3.  ts.config.json 添加  "paths": {
      "@/*": [ "src/*" ],
    }
  4.vite项目引入文件需要添加.vue  .ts不需要加.ts
 */

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
});
