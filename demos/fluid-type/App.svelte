<script lang="ts">
  import Text from "./Text.svelte";
  import CSS from "./CSS.svelte";

  let text = $state("You're Listening to Syntax");
  let min_viewport = $state(400);

  let max_viewport = $state(1080);

  // Base sizes
  let min_font_size = $state(16);
  let max_font_size = $state(24);

  let steps_below_base = $state(1);
  let steps_above_base = $state(6);

  // 1rem = 16px
  let rem_size = $state(16);
  let ratio = $state(4 / 3);

  let min_viewport_rem = $derived(min_viewport / rem_size);
  let max_viewport_rem = $derived(max_viewport / rem_size);

  let min_font_size_rem = $derived(min_font_size / rem_size);
  let max_font_size_rem = $derived(max_font_size / rem_size);

  // Formulas
  // Your font size exists on a linear scale, to calculate this, you need to do math to find the slope and the intercept this gives you a value at any given point in the linear scale
  // slope = (max_font_size - min_font_size) / (max_viewport - min_viewport)
  // y-intercept is the x value when y hits 0
  // So, the y-intercept is just a fancy way of saying where your line starts on the y-axis before it begins its journey across the graph
  // y-intercept = min_font_size - slope * min_viewport
  // css for a linear scale
  // clamp(min_font_size, preferred, max_font_size)
  // to elaborate on preferred
  // clamp(min_font_size, (slope * 100vi) + y-intercept, max_font_size)
  // vi === viewport inline basically logical version of vw

  let steps = $derived(
    generate_steps_array(steps_above_base, steps_below_base)
  );

  function round(num: number, places: number) {
    return Math.round(num * Math.pow(10, places)) / Math.pow(10, places);
  }

  function get_font_size_from_ratio(size: number, step: number) {
    let final_size = size;
    if (step < 0) {
      final_size = size / Math.pow(ratio, step * -1);
    } else {
      if (step === 0) {
        final_size = size;
      } else {
        final_size = size * Math.pow(ratio, step);
      }
    }
    return round(final_size, 2);
  }

  function create_css(step: number = 0) {
    let local_max_font_size = get_font_size_from_ratio(max_font_size_rem, step);
    let local_min_font_size = get_font_size_from_ratio(min_font_size_rem, step);
    let local_slope = round(
      (local_max_font_size - local_min_font_size) /
        (max_viewport_rem - min_viewport_rem),
      6
    );
    let local_y_intercept = round(
      (local_min_font_size - local_slope * min_viewport_rem) * 100,
      2
    );
    return {
      min: local_min_font_size,
      max: local_max_font_size,
      slope: local_slope,
      y_intercept: local_y_intercept,
      step,
    };

    // return `font-size: clamp(${local_min_font_size}rem, ${local_slope}vi + ${local_y_intercept}rem, ${local_max_font_size}rem);`;
  }

  function generate_steps_array(stepsAbove: number, stepsBelow: number) {
    const result = [];

    // Add steps below the base data
    for (let i = stepsBelow; i > 0; i--) {
      result.push(create_css(i * -1));
    }

    // Add the base data
    result.push(create_css());

    // Add steps above the base data
    for (let i = 1; i <= stepsAbove; i++) {
      result.push(create_css(i));
    }

    return result;
  }
</script>

<div class="controls">
  <div>
    <label for="scale">Scale</label>
    <select name="scale" id="scale" bind:value={ratio}>
      <option value={16 / 15}>Minor 2nd 16/15</option>
      <option value={9 / 8}>Major 2nd 9/8</option>
      <option value={5 / 4}>Major 3rd 5/4</option>
      <option value={4 / 3}>Perfect Fourth 4/3</option>
    </select>
  </div>
</div>

<div class="resize">
  <button onclick={() => steps_below_base--}>- 1</button>
  <button onclick={() => steps_below_base++}>+ 1</button>
  {#each steps as step}
    <Text {step} bind:text />
  {/each}
  <button onclick={() => steps_above_base--}>- 1</button>
  <button onclick={() => steps_above_base++}>+ 1</button>
</div>

<CSS {steps} />
