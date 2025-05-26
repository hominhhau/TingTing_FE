import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import polyfillNode from "rollup-plugin-polyfill-node";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    global: "globalThis", // Changed from "window" to "globalThis"
  },
  resolve: {
    alias: {
      events: "events",
      util: "util",
      stream: "stream-browserify",
      buffer: "buffer",
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Explicitly include React
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        polyfillNode({
          // Exclude React from polyfill
          exclude: ['react', 'react-dom']
        })
      ],
    },
  },
});