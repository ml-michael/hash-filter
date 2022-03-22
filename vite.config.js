// vite.config.js

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    minify: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "/images": "src/assets/images",
    },
  },
  base: process.env.NODE_ENV === "production" ? "/<REPO>/" : "./",
});

// TODO:下方為網上範例的 config
// import path from "path";
// import externalGlobals from "rollup-plugin-external-globals"; //cdn
// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";

// export default defineConfig({
//   root: path.resolve(__dirname), //index.html所在資料夾
//   publicDir: "public", //靜態資源
//   base: "./", //服務器檔案引入路徑
//   build: {
//     rollupOptions: {
//       //當成外部模組
//       external: ["vue", "axios", "vue-router"], //不打包 用cdn引入
//       output: {
//         manualChunks(id) {
//           //分割打包
//           if (id.includes("node_modules") && id.includes("@vue")) {
//             return "vender";
//           }
//           if (id.includes("node_modules")) {
//             if (id.includes("vue/dist/vue.runtime.esm-bundler.js")) return;
//             return id
//               .toString()
//               .split("node_modules/")[1]
//               .split("/")[0]
//               .toString();
//           }
//         },
//       },
//       plugins: [
//         externalGlobals({
//           vue: "Vue",
//           axios: "axios",
//           ["vue-router"]: "VueRouter",
//         }),
//       ],
//       // chunk 大小警告的限制
//       chunkSizeWarningLimit: 500,
//     },
//     outDir: "dist", // 構建輸出路徑
//     assetsDir: "assets", //靜態資原始檔夾，和outDir同級
//     assetsInlineLimit: 4096, // kb, 小於此值將內聯base64格式
//     cssCodeSplit: true, // 執行css檔案按chunk拆分，chunk載入時插入，如果false則所有的樣式匯出為一個css檔案
//   },
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       "@/": `${path.resolve(__dirname, "src")}/`, //別名
//     },
//   },
//   server: {
//     port: 3030, //npm run dev port
//     proxy: {
//       //跨域代理
//       // 字符串简写写法
//       "/foo": "http://localhost:4567",
//       // 选项写法
//       "/api": {
//         target: "https://jsonplaceholder.typicode.com",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//       // 正则表达式写法
//       "^/fallback/.*": {
//         target: "http://jsonplaceholder.typicode.com",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/fallback/, ""),
//       },
//       // 使用 proxy 实例
//       // '/api': {
//       //   target: 'http://jsonplaceholder.typicode.com',
//       //   changeOrigin: true,
//       //   configure: (proxy, options) => {
//       //     // proxy 是 'http-proxy' 的实例
//       //   }
//       // }
//     },
//   },
//   css: {
//     preprocessorOptions: {
//       //可以所有檔案共享某個scss 感覺我會用來做變量等等的宣告
//       scss: {
//         additionalData: `@import "@/assets/style/base.scss";`,
//       },
//     },
//   },
// });
