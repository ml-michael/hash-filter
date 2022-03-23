// vite.config.js

// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import path from "path";

// // // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   build: {
//     minify: true,
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//       "/images": "src/assets/images",
//     },
//   },
//   base: process.env.NODE_ENV === "production" ? "/<REPO>/" : "./",
// });

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path, { resolve } from "path";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME

  return defineConfig({
    plugins: [vue()],
    // rollupOptions: {
    //   input: {
    //     example: path.resolve(process.cwd(), "index.html"), // 把页面放在外面，路径简短 防止src/packages/web/index.html ，建议vite把key(web、lib)可也阔以映射成页面路径，就避免这个问题
    //     lib: path.resolve(process.cwd(), "lib.html"),
    //   },
    // },
    resolve: {
      alias: [
        {
          // find: "@",
          // replacement: path.resolve(__dirname, "src"),
          "@": resolve(__dirname, "src"),
          views: resolve(__dirname, "src/views"),
          utils: resolve(__dirname, "src/utils"),
        },
      ],
    },
    server: {
      port: 8080,
      proxy: {
        "/api": {
          target: "http://192.168.1.4:8181/",
          changeOrigin: true, //是否跨域
          secure: false,
        },
        "/storages": {
          target: "http://192.168.1.4:81/",
          changeOrigin: true, //是否跨域
          secure: false,
        },
      },
    },
    build: {
      // 大小警告
      chunkSizeWarningLimit: 600,
      // 關閉 CSS 程式碼拆分
      cssCodeSplit: false,
      //構建後生成的 source map 檔案，會等於生產環境的命名
      sourcemap: process.env.NODE === "production",
    },
  });
};
