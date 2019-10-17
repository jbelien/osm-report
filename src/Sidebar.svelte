<script>
  import Title from './Title.svelte'
  import Form from './Form.svelte'
</script>

<style>
  div.sidebar {
    display: flex;
    flex-basis: 33%;
    flex-direction: column;
    padding: 10px;
  }

  footer {
    margin-top: 1rem;
    font-size: small;
    text-align: center;
  }
  footer > a {
    text-decoration: none;
  }
</style>

<div class="sidebar">
  <Title />
  <div>
    <p>Spotted a mistake or something missing? Let other mappers know so we can fix it.</p>
    <p>Click in the map and type a note to explain the problem.</p>
    <p>Your note is public and may be used to update the map, so don't enter personal information, or information from copyrighted maps or directory listings.</p>
  </div>
  <Form />
  <footer>
    <i class="fab fa-github"></i>
    <a target="_blank" href="https://github.com/jbelien/osm-report">GitHub</a>
  </footer>
</div>
