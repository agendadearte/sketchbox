import { resolve } from "path";

export default {
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "#root": resolve(__dirname),
    },
  },
};
