<script lang="ts">
  import { getHighlighter } from "shiki/bundle/web";
  import { theme } from "./theme";

  const { code } = $props();

  async function highlightCode(str: string) {
    try {
      const highlighter = await getHighlighter({
        themes: [theme],
        langs: ["svelte"],
      });
      return highlighter.codeToHtml(str, {
        lang: "svelte",
        theme: "Level Up",
      });
    } catch (e) {
      console.log("e", e);
    }
  }
</script>

{#await highlightCode(code) then highlighted_code}
  {@html highlighted_code}
{/await}
