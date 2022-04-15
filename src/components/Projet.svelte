<script lang="ts">
  import type Projet from '../types/projet';

  export let projet: Projet;
</script>

<div class="flex">
  <div class="content">
    {#each projet.images as image}
      <img src={image.src} alt={image.alt} />
    {/each}
  </div>
  <div class="description">
    <div class="description-fixed">
      <div class="titre">{projet.titre}</div>
      <p>{projet.description}</p>
      {#if projet?.tags?.length > 0}
        <div class="tags">{projet.tags.join(' ; ')}</div>
      {/if}
    </div>
  </div>
</div>

<style>
  .flex {
    display: flex;
  }

  .content {
    flex-grow: 1;
  }

  .description {
    width: 333px;
    flex-shrink: 0;
  }

  .description-fixed {
    position: fixed;
    top: 0;
    right: 0;
    width: 333px;
    padding: 100px 16px 16px 16px;
    text-align: justify;
    color: #4d6e56;
    font-size: 14px;
    background-color: white;
  }

  .titre {
    font-weight: 800;
    font-size: 18px;
    margin-bottom: 30px;
  }

  .tags {
    font-size: 12px;
    font-weight: 700;
    color: #a7802e;
    margin-top: 50px;
    margin-bottom: 500px;
  }

  img {
    margin: 0;
    padding: 0;
    max-width: 100%;
    max-height: 100vh;
  }
</style>
