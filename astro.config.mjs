import { defineConfig } from "astro/config";
// import basicSsl from "@vitejs/plugin-basic-ssl";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
});
