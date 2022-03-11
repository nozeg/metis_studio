<script>
  import Nav from '../components/Nav.svelte';
</script>

<div class="layout">
  <div class="nav-container">
    <Nav />
  </div>

  <main>
    <slot />
  </main>
</div>

<style>
  .nav-container {
    width: 264px;
    min-height: 264px;
    flex-shrink: 0;
  }

  .layout {
    display: flex;
  }

  main {
    flex-grow: 1;
  }
</style>
