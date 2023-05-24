<div class="galerie-colonnes">
  <slot />
</div>

<style>
  .galerie-colonnes {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    margin: 4rem;
  }
</style>
