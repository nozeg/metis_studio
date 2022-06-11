<div class="flex">
  <div class="content">
    <img src="/isl/03.jpg" alt="Metis studio" />
    <img src="/isl/01.jpg" alt="Metis studio" />
    <img src="/isl/02.jpg" alt="Metis studio" />
  </div>
  <div class="description">
    <div class="description-fixed">
      <img class="WIP" src="/about/Travail-EC.svg" alt="Metis studio" />

      <div class="titre">ISL - L'Islande, une terre de contraste</div>
      <div class="description-txt">Bonjour</div>

      <div class="description-txt" />

      <div class="tags">illustration ; islande ; carnet de voyage ; en cours</div>
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
    color: #0c795c;
    font-size: 14px;
    background-color: white;
  }

  .titre {
    font-weight: 800;
    font-size: 18px;
    margin-bottom: 30px;
  }

  .description-txt {
    margin-bottom: 10px;
  }

  .tags {
    font-size: 12px;
    font-weight: 700;
    color: #19a880;
    margin-top: 50px;
    margin-bottom: 500px;
  }

  .WIP {
    margin-top: -10%;
    margin-bottom: 10px;
    margin-left: 80%;
    width: 20%;
  }

  img {
    margin: 0;
    padding: 0;
    max-width: 100%;
    max-height: 100vh;
  }
</style>
