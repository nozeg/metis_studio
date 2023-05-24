<div class="flex">
  <slot />
</div>

<style>
  .flex {
    display: flex;
    flex-direction: column;
  }

  .galerie-colonnes {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    margin: 4rem;
  }
</style>
