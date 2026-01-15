// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    server: {
      proxy:
        command === "serve" // only active in dev
          ? {
              "/api": {
                target: "http://localhost:8000",
                changeOrigin: true,
                secure: false,
              },
            }
          : undefined, // no proxy in production
    },
  };
});

