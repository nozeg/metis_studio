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
  </div>
  <div class="boite-choix" />
  <div class="description-fixed-2 galerie">
    <slot />
  </div>
</div>

<style>
  .description-fixed {
    position: relative;
    text-align: justify;
    color: #0bac81;
    font-size: 14px;
    background-color: white;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-bottom: 1rem;
    margin-top: 8rem;
  }

  .description-fixed-2 {
    position: relative;
    text-align: justify;
    color: #0bac81;
    font-size: 14px;
    background-color: white;
    padding-left: 4rem;
    padding-right: 4rem;
    margin-bottom: 2rem;
    margin-top: 4rem;
  }

  .titre {
    font-weight: 800;
    font-family: QanelasSoftDEMO-ExtraBold;
    font-size: 60px;
    margin-bottom: 30px;
  }

  .wip {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 80px;
  }

  .boite-choix {
    border-bottom: 0.05em solid #0bac81;
    width: auto;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-bottom: 1rem;
  }

  .galerie {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }
</style>
