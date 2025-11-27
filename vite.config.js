import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@atomics": path.resolve(__dirname, "./src/components/atomics"),
      "@compounds": path.resolve(__dirname, "./src/components/compounds"),
      "@theme": path.resolve(__dirname, "./src/styles/theme"),
    },
  },
});
