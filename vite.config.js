import { resolve } from "path";

export default {
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        catalog: resolve(__dirname, "src/catalog.html"),
        // 404: resolve(__dirname, "src/404.html"),
      },
    },
  },
};
