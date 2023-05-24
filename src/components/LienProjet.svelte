<script>
  export let titre;
  export let lien;
  export let image;
</script>

<a class="projetINV" href={lien}>
  <span class="img-container">
    <img src={image} alt={titre} />
  </span>
  <div class="bulle-container">
    <slot />
    <span class="title">{titre}</span>
  </div>
</a>

<style>
  .projetINV {
    position: relative;
    width: 100%;
    text-decoration: none;
  }

  .img-container {
    display: flex;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    margin: 0px auto;
    transition-property: opacity;
    transition-duration: 250ms;
  }

  .bulle-container {
    opacity: 0;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    transition-property: opacity;
    transition-duration: 250ms;
  }

  @media (hover: hover) {
    .projetINV:hover .bulle-container {
      opacity: 1;
    }

    .projetINV:hover img {
      opacity: 0;
    }
  }

  .title {
    color: #007d5e;
    align-self: flex-end;
    font-family: QanelasSoftDEMO-ExtraBold;
    font-size: 20px;
    font-weight: 800;
    position: absolute;
    bottom: 0px;
  }
</style>
