<script>
  export let titre;
  export let wip = false;
</script>

<div class="description">
  <div class="description-fixed">
    {#if wip}
      <img class="wip" src="/about/Travail-EC.svg" alt="Metis studio" />
    {/if}
    <div class="titre">{titre}</div>
    <slot />
  </div>
</div>

<style>
  .description-fixed {
    position: relative;
    text-align: justify;
    color: #0c795c;
    font-size: 14px;
    background-color: white;
    padding: 96px 16px 48px;
  }
  .titre {
    font-weight: 800;
    font-size: 18px;
    margin-bottom: 30px;
  }

  .wip {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 80px;
  }

  /* desktop version */
  @media (min-width: 768px) {
    .description {
      flex-basis: 400px;
      flex-shrink: 0;
      flex-grow: 0;
      order: 999;
    }

    .description-fixed {
      position: fixed;
      top: 0;
      right: 0;
      width: 400px;
      padding: 100px 30px 16px 30px;
    }
  }
</style>
