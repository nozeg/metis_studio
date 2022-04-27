<div class="flex">
  <div class="content">
    <img src="/aqu-images/Montagne_2jpg.jpg" alt="Metis studio" />
    <img src="/aqu-images/Montagne_1.jpg" alt="Metis studio" />
    <img src="/aqu-images/Champ_1.jpg" alt="Metis studio" />
    <img src="/aqu-images/Montagne_3jpg.jpg" alt="Metis studio" />
    <img src="/aqu-images/Montagne_4.jpg" alt="Metis studio" />
    <img src="/aqu-images/Lac_1.jpg" alt="Metis studio" />
  </div>
  <div class="description">
    <div class="description-fixed">
      <div class="titre">AQU - Aquarelles du territoire</div>
      Quelques extraits d'un cahier de croquis pour tenter de capter les changements de saison dans des
      paysages où l'homme n'est pas. La montagne est un formidable révélateur du temps qui passe, elle
      se fait le miroir de la lumière d'été ou d'hiver, des plantes qui se succèdent au cours de l'année...
      <div class="tags">carnet de croquis ; aquarelle ; dessins à la main ; réalisé</div>
    </div>
  </div>
</div>

<style>
  .flex {
    display: flex;
  }

  .content {
    flex-grow: 1;
    justify-content: center;
  }

  .description {
    width: 400px;
    flex-shrink: 0;
  }

  .description-fixed {
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    padding: 100px 30px 16px 30px;
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
