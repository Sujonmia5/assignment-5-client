import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // Set the base URL if deploying to a subdirectory
  build: {
    outDir: "dist", // Default output directory
  },
  plugins: [react()],
});
