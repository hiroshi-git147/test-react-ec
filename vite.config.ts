import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/api' で始まるリクエストを http://localhost:8080 に転送
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true, // オリジンを変更
        // rewrite: (path) => path.replace(/^\/api/, '') // 必要に応じてパスを書き換える
      },
    },
  },
});
