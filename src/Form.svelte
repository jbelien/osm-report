<script>
  import Location from "./Location.svelte";
  import { marker as markerStore } from "./map/store.ts";

  let note;

  function handleSubmit() {
    console.log(note, $markerStore.getLatLng());
  }
</script>

<style>
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
