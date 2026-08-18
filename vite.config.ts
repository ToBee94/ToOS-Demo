import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  // Served from https://tobee94.github.io/ToOS-Demo/ (a project page, not a
  // user/org root page) — only needed for the production build; keep the
  // dev server at "/" so local URLs stay plain.
  base: command === "build" ? "/ToOS-Demo/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    // dedupe react/react-dom in case a local file: link to toos (or a
    // mismatched hoist) ever puts a second copy in the tree.
    dedupe: ["react", "react-dom", "react-router-dom"],
  },
  server: { host: "0.0.0.0", port: 5174, strictPort: true },
}));
