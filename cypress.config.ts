import { defineConfig } from "cypress";
import { plugin as cypressFirebasePlugin } from "cypress-firebase";
import admin from "firebase-admin";
//TODO: set cypress env
const env: { VITE_HOST: any; VITE_PORT: any } = {
  VITE_HOST: "",
  VITE_PORT: "",
};
env.VITE_HOST = "http://127.0.0.1";
env.VITE_PORT = "3002";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: `${env.VITE_HOST}:${env.VITE_PORT}`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return cypressFirebasePlugin(on, config, admin);
    },
  },
});
