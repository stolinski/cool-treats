<script lang="ts">
  let {
    steps,
  }: {
    steps: {
      min: number;
      max: number;
      slope: number;
      y_intercept: number;
      step: number;
    }[];
  } = $props();

  const css = $derived(
    steps
      .map((step) => {
        return `font-size: clamp(${step.min}rem, ${step.slope}vi + ${step.y_intercept}rem, ${step.max}rem);`;
      })
      .join("\n")
  );
</script>

<div class="css">
  <textarea name="scale_css">{css}</textarea>
</div>

<style>
  textarea {
    height: 500px;
    width: 100%;
  }
</style>
