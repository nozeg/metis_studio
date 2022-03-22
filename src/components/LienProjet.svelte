<script>
  export let titre;
  export let lien;
  export let image;
  export let colorbox;
</script>

<a class="projetINV" href={lien} style="--Colorprojet:{colorbox}">
  <span class="img-container">
    <img src={image} />
  </span>
  <span class="cover" />
  <span class="title">{titre}</span>
</a>

<style>
  .projetINV {
    position: relative;
    width: 333px;
    height: 333px;
    text-decoration: none;
    margin: 20px;
  }

  .img-container {
    display: flex;
    justify-content: center;
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

  .title {
    color: white;
    opacity: 0;
    align-self: flex-end;
    font-weight: 800;
    position: absolute;
    bottom: 30px;
    left: 0px;
    right: 0px;
    text-align: center;
    transition-property: opacity;
    transition-duration: 150ms;
  }

  .cover {
    display: block;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    transition-property: background-color;
    transition-duration: 150ms;
  }
  .cover:hover {
    background-color: var(--Colorprojet);
  }

  a:hover .title {
    opacity: 1;
  }
</style>
