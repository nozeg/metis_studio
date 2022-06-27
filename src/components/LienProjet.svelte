<script>
  export let titre;
  export let lien;
  export let image;
  export let colorbox;
  import Bulle from './Bulle.svelte';
</script>

<a class="projetINV" href={lien} style="--Colorprojet:{colorbox}">
  <span class="img-container">
    <img src={image} alt={titre} />
  </span>
  <div class="bulle-container">
    <Bulle />
    <span class="title">{titre}</span>
  </div>
</a>

<style>
  .projetINV {
    position: relative;
    width: min(333px, calc(100vw - 40px));
    height: min(333px, calc(100vw - 40px));
    text-decoration: none;
    margin: 20px;
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    margin: 0px auto;
  }

  .bulle-container {
    opacity: 0;
    transition-property: opacity;
    transition-duration: 250ms;
  }

  @media (hover: hover) {
    .projetINV:hover .bulle-container {
      opacity: 1;
    }
  }

  .title {
    color: white;
    align-self: flex-end;
    font-size: 14px;
    font-weight: 800;
    position: absolute;
    bottom: 150px;
    left: 0px;
    right: 0px;
    text-align: center;
  }
</style>
