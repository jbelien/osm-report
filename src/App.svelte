<script>
  import Sidebar from './Sidebar.svelte'
  import Map from './Map.svelte'
</script>

<style>
  div {
    display: flex;
    min-height: 100%;
  }

  @media (max-width: 768px) {
    div {
      flex-direction: column-reverse;
    }
  }
</style>

<div>
  <Sidebar />
  <Map />
</div>
