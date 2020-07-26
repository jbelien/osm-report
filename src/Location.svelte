<script lang="ts">
  import { beforeUpdate } from "svelte";

  export let longitude: number;
  export let latitude: number;

  beforeUpdate((): void => {
    longitude = Math.round(longitude * 1000000) / 1000000;
    latitude = Math.round(latitude * 1000000) / 1000000;
  });
</script>

<div>
  <i class="fas fa-map-marker-alt"></i>
  <span id="longitude">{longitude}</span>
  <span id="latitude">{latitude}</span>
</div>