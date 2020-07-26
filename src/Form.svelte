<script lang="ts">
  import Location from "./Location.svelte";

  import { map as mapStore, marker as markerStore } from "./map/store.ts";
  import submit from "./form/submit.ts";

  let note;

  function handleSubmit(): void {
    submit(note, $mapStore);
  }
</script>

<style>
  form {
    align-self: stretch;
    flex-grow: 1;
  }

  textarea {
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    height: 250px;
    resize: vertical;
    width: 100%;
  }

  button {
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    cursor: pointer;
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    width: 100%;
  }
  button:hover {
    background-color: #ccc;
  }

  @media (max-width: 768px) {
    textarea {
      height: 150px;
    }
  }
</style>

<form autocomplete="off" on:submit|preventDefault="{handleSubmit}">
  <textarea bind:value="{note}"></textarea>
  {#if $markerStore}
  <Location longitude="{$markerStore.getLatLng().lng}" latitude="{$markerStore.getLatLng().lat}"/>
  {/if}
  <button type="submit" disabled="{!note || !$markerStore}">
    <i class="far fa-paper-plane"></i>
    Send
  </button>
</form>
