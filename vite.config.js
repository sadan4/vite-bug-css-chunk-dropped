import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
    base: "./",
    build: {
        emptyOutDir: true,
        rolldownOptions: {
            input: mode === "dynamic" ? "dynamic.html" : "static.html",
            output: {
                entryFileNames: "index.js",
                chunkFileNames: "[name]-[hash:8].js",
                assetFileNames: "[name]-[hash:8].[ext]",
            },
        },
    },
}));
