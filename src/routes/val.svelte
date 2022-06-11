<div class="flex">
  <div class="content">
    <img src="/val-img/DSC03197-01.jpg" alt="Metis studio" />
    <img src="/val-img/Carte-03.jpg" alt="Metis studio" />
    <img src="/val-img/Carte-02.jpg" alt="Metis studio" />
  </div>
  <div class="description">
    <div class="description-fixed">
      <img class="WIP" src="/about/Travail-EC.svg" alt="Metis studio" />

      <div class="titre">VAL - Au fil de la Valserine, une cartographie sensible</div>
      <div class="description-txt">
        Et si on découvrait autrement la vallée de la Valserine ? C’est la question à l’origine de
        cette cartographie qui prend le parti d’utiliser ses 5 sens pour essayer de sensibiliser le
        promeneur à son environnement, au-delà de ce qu’il peut voir. Les paysages de la Valserine
        sont divers et regorgent d’une multitude de richesses pour tous les sens. Ici, on peut
        deviner la puissance de la rivière sans la voir grâce à ses deux oreilles, là on peut sentir
        en été l’odeur des épicéas fraîchement coupés, etc. Cette carte se veut évolutive et
        collaborative, pourquoi pas imaginer une carte par saison, une carte pour les petits ou les
        grands, les possibilités sont presque infinies !
      </div>

      <div class="description-txt">
        L'objectif de cette cartographie est de proposer des parcours aux promeneurs grâce à un
        dépliant ou une carte interactive (en cours de développement).
      </div>

      <div class="tags">
        outil de médiation ; valserine ; cartographie ; paysages ; dépliant ; en cours
      </div>
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
