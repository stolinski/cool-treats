import { defineConfig } from "vite";
import { directoryPlugin } from "vite-plugin-list-directory-contents";
import { InjectHtml } from "./hot-injection";

export default defineConfig({
  plugins: [
    directoryPlugin({ baseDir: __dirname }),
    InjectHtml({
      ignored_tags: ["DIRECTORY"],
    }),
  ],
});
