<script>
  export let titre;
  export let lien;
  export let image;
  export let colorbox;
</script>

<a class="projetINV" href={lien} style="--Colorprojet:{colorbox}">
  <span class="img-container">
    <img src={image} alt={titre} />
  </span>
  <span class="cover" />
  <span class="title">{titre}</span>
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

  .title {
    color: #19a880;
    opacity: 0;
    align-self: flex-end;
    font-weight: 800;
    position: absolute;
    bottom: 50px;
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

  svg {
    background-color: var(--Colorprojet);
  }

  a:hover .cover {
    background-image: url('/index/carre-03.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    background-color: white;
  }

  a:hover .title {
    opacity: 1;
  }
</style>
