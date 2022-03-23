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
import path from "path";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME

  return defineConfig({
    plugins: [vue()],
    // server: {
    //   port: 8080
    // },
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
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
      chunkSizeWarningLimit: 600,
      cssCodeSplit: false,
      sourcemap: process.env.MODE === "production",
    },
  });
};
