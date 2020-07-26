<script lang="ts">
  import { onMount } from "svelte";

  import init from "./map/init.ts";
  import loadNotes from "./map/note/load.ts";
  import { zoom } from "./map/store";
  import Permalink from "./map/permalink";

  let container: HTMLElement;

  onMount(() => {
    const map = init(container);
    const permalink = new Permalink(map);

    return () => { };
  });
</script>

<style>
  div.map {
    flex-grow: 1;
    position: relative;
  }

  .overlay {
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100vw - 4em);
    max-width: 32em;
    max-height: calc(100vh - 4em);
    overflow: auto;
    transform: translate(-50%, -50%);
    padding: 1em;
    border-radius: 0.2em;
    background: rgba(255, 255, 255, 0.75);
    z-index: 500;
  }

  @media (max-width: 768px) {
    div.map {
      height: 75vh;
    }
  }
</style>

<div class="map">
  <div bind:this="{container}" style="height: 100%; width: 100%;"></div>
  <div class="overlay" hidden="{$zoom > 12}">
    <p>Please zoom in to display existing notes or add a new note !</p>
    <p>
      You can also click on the button <i class="fa fa-map-marker"></i> to zoom
      on your current location.
    </p>
  </div>
</div>