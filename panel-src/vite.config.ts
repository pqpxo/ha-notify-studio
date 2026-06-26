// version 15
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const currentDirectory = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Vite library builds intentionally preserve process.env references. The
  // Home Assistant panel runs directly in a browser, where `process` does not
  // exist, so replace this constant while producing the committed bundle.
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  plugins: [react()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(currentDirectory, "src/main.tsx"),
      formats: ["es"],
      fileName: () => "notify-studio-panel.js",
    },
    rollupOptions: {
      output: {
        entryFileNames: "notify-studio-panel.js",
        assetFileNames: "notify-studio-panel.[ext]",
      },
    },
    outDir: resolve(currentDirectory, "../custom_components/notify_studio/frontend"),
  },
});
