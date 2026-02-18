import { defineConfig } from "vite"; // ✅ Vite, pas vitest/config
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,                  // permet d'utiliser expect, describe, it sans import
    environment: "jsdom",           // simule le navigateur
    setupFiles: "./src/setupTests.js", // fichier de setup (note le 's' final)
    coverage: {
      reporter: ["text", "html"],   // rapports de couverture
      exclude: ["node_modules/", "vite.config.ts"],
    },
  },
});