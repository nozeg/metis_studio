<div class="flex">
  <slot />
</div>

<style>
  .flex {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    .flex {
      flex-direction: row;
    }
  }
</style>
