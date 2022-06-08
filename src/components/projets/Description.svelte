<script>
  export let titre;
</script>

<div class="description">
  <div class="description-fixed">
    <div class="titre">{titre}</div>
    <slot />
  </div>
</div>

<style>
  .description {
    width: 400px;
    flex-shrink: 0;
  }

  .description-fixed {
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    padding: 100px 30px 16px 30px;
    text-align: justify;
    color: #576775;
    font-size: 14px;
    background-color: white;
  }

  .titre {
    font-weight: 800;
    font-size: 18px;
    margin-bottom: 30px;
  }
</style>
