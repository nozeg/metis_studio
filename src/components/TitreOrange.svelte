<script>
  export let backgroundColor = '#f9f1ee';
</script>

<h4>
  <span class="container" style="--bgColor:{backgroundColor}">
    <span class="border" />
    <span class="content">
      <slot />
    </span>
  </span>
</h4>

<style>
  .container {
    position: relative;
    display: inline-block;
  }

  .border {
    content: ' ';
    background-color: #576775;
    position: absolute;
    bottom: -4px;
    right: -4px;
    top: 4px;
    left: 4px;
    z-index: 1;
  }

  .content {
    position: relative;
    display: inline-block;
    font-weight: 800;
    padding: 8px;
    background-color: var(--bgColor);
    color: #576775;
    z-index: 2;
  }
</style>
