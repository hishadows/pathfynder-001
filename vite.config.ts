import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import eslint from "vite-plugin-eslint";
import istanbul from "vite-plugin-istanbul";
// https://vitejs.dev/config/
const config = ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [
      react(),
      eslint(),
      istanbul({
        cypress: true,
        requireEnv: true,
      }),
    ],
    server: {
      host: true,
      port: parseInt(process.env.VITE_PORT),
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
  });
};

export default config;
