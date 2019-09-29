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

<form autocomplete="off">
  <textarea name="note"></textarea>
  <button type="submit">
    <i class="far fa-paper-plane"></i>
    Send
  </button>
</form>
