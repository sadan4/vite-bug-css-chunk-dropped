import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
    base: "./",
    build: {
        emptyOutDir: true,
        rolldownOptions: {
            input: mode === "dynamic" ? "src/main-dynamic.js" : "src/main-static.js",
            output: {
                entryFileNames: "index.js",
                chunkFileNames: "[name]-[hash:8].js",
                assetFileNames: "[name]-[hash:8].[ext]",
            },
        },
    },
}));
