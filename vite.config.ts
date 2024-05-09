import { defineConfig } from "vite";
import { directoryPlugin } from "vite-plugin-list-directory-contents";
import { InjectHtml } from "./hot-injection";
import { svelte } from '@sveltejs/vite-plugin-svelte';


export default defineConfig({
  plugins: [
		svelte(),
    directoryPlugin({ baseDir: __dirname }),
    InjectHtml({
      ignored_tags: ["DIRECTORY"],
    }),
  ],
});
