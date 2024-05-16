<script lang="ts">
  let {
    step,
    text = $bindable(),
  }: {
    step: {
      min: number;
      max: number;
      slope: number;
      y_intercept: number;
      step: number;
    };
    text: string;
  } = $props();
</script>

<div class="row">
  <span>
    {#if step.step === 0}
      Base
    {:else}{/if}
  </span>
  <p
    contenteditable
    bind:innerText={text}
    style={`font-size: clamp(${step.min}rem, ${step.slope}vi + ${step.y_intercept}rem, ${step.max}rem);`}
  ></p>
</div>

<style>
  .row {
    border-bottom: 1px solid var(--fg);
  }
  p {
    line-height: 1.5;
    margin: 0;
  }
</style>
