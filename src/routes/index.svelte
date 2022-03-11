<div class="listeprojets">
  <a class="projetINV" href="/projet">
    <span> INV - Villes invisibles </span>
  </a>
</div>

<style>
  .listeprojets {
    height: 300vh;
    flex-grow: 1;
    margin: 16px 0px 16px 0px;
  }

  .projetINV {
    width: 333px;
    height: 333px;
    background-image: url('/inv-img/inv-1-01-01.jpg');
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
    background-color: #c96f44;
    background-image: none;
  }

  .projetINV:hover span {
    opacity: 1;
    font-weight: 800;
  }
</style>
