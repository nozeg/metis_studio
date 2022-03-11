<script>
  export let titre;
  export let lien;
  export let image;
  export let colorbox;

  const imageLien = `url(${image})`;
  // si image vaut "toto", imageLien vaut "url(toto)"
</script>

<a class="projetINV" href={lien} style="--bgImage:{imageLien};--Colorprojet:{colorbox}">
  <span>{titre}</span>
</a>

<style>
  .projetINV {
    width: 333px;
    height: 333px;
    background-image: var(--bgImage);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transition-property: background-color;
    transition-duration: 150ms;
    display: flex;
    justify-content: center;
    padding: 16px;
    text-decoration: none;
  }

  .projetINV span {
    color: white;
    opacity: 0;
    align-self: flex-end;
  }

  .projetINV:hover {
    background-color: var(--Colorprojet);
    background-image: none;
  }

  .projetINV:hover span {
    opacity: 1;
    font-weight: 800;
  }
</style>
