<script>
  import { beforeUpdate } from "svelte";

  export let longitude;
  export let latitude;

  beforeUpdate(() => {
    longitude = Math.round(longitude * 1000000) / 1000000;
    latitude = Math.round(latitude * 1000000) / 1000000;
  });
</script>

<div>
  <i class="fas fa-map-marker-alt"></i>
  <span id="longitude">{longitude}</span>
  <span id="latitude">{latitude}</span>
</div>
