<script>
  import { onMount } from "svelte";

  import init from "./map/init.ts";
  import loadNotes from "./map/note/load.ts";

  let container;

  onMount(() => {
    const map = init(container);
    loadNotes(map);

    return () => {};
  });
</script>

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>

<div bind:this="{container}"></div>
