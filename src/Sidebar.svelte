<script>
  import Title from './Title.svelte'
  import Form from './Form.svelte'
</script>

<style>
  div {
    padding: 10px;
    width: 33%;
  }
</style>

<div>
  <Title />
  <p>Spotted a mistake or something missing? Let other mappers know so we can fix it.</p>
  <p>Click in the map and type a note to explain the problem.</p>
  <p>Your note is public and may be used to update the map, so don't enter personal information, or information from copyrighted maps or directory listings.</p>
  <Form />
</div>
