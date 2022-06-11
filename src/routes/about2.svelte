<script>
  import Carre from '$components/Carre.svelte';
</script>

<div class="flex">
  <div class="content">
    <h1>Métis studio, qu'est-ce que c'est ?</h1>
    <div class="texte">
      C’est un projet pour aider les collectivités, les bureaux d’architecture ou d’urbanisme et les
      particuliers à exprimer leurs idées et à raconter des projets territoriaux.
      <div class="texte">
        C’est promouvoir le territoire et ses ressources sous toutes ses formes : l’habité, le
        construit, les espaces naturels et sensibles, les habitant·e·s, l’histoire des lieux, etc.
      </div>
      <div class="texte">
        C’est mettre au service de la narration une pluralité d’outils adaptés à chaque projet :
      </div>
    </div>
    <div class="bulles">
      <a>
        <Carre />
        <div class="bullestxt">Graphiques</div>
      </a>
      <a>
        <Carre />
        <div class="bullestxt">Analytiques</div>
      </a>
      <a>
        <Carre />
        <div class="bullestxt">Vivant</div>
      </a>
      <a>
        <Carre />
        <div class="bullestxt">En volume</div>
      </a>
    </div>
    <h1>Métis studio, quels services ?</h1>
    <div>
      Médiation en urbanisme Analyses territoriales Illustration Motion design Organisation de
      processus participatifs Prints
    </div>
    <h1>Pourquoi Métis studio ?</h1>
    <h1>Qui est derrière Métis studio ?</h1>
  </div>
</div>

<style>
  .flex {
    display: flex;
  }
  .content {
    flex-grow: 1;
    justify-content: center;
    width: 400px;
    margin-left: 20px;
    margin-top: 100px;
    color: #0c795c;
    font-size: 14px;
    flex-shrink: 0;
  }

  .texte {
    margin-top: 10px;
  }
  .bulles {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .bullestxt {
    position: absolute;
    justify-content: center;
    margin-top: -70px;
    margin-left: 35px;
    font-family: bakso;
    font-weight: 700;
    font-size: 18px;
    color: #e06862;
  }

  h1::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  h1:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  h1::before {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: #f7d5d4;
    z-index: -1;
    transition: transform 0.3s ease;
  }

  h1 {
    position: relative;
    font-size: 5rem;
    font-family: bakso;
    font-weight: 700;
    font-size: 18px;
  }

  html {
    block-size: 100%;
    inline-size: 100%;
  }

  body {
    min-block-size: 100%;
    min-inline-size: 100%;
    margin: 0;
    box-sizing: border-box;
    display: grid;
    place-content: center;
    font-family: bakso;
    font-weight: 700;
    font-size: 18px;
  }

  @media (orientation: landscape) {
    body {
      grid-auto-flow: column;
    }
  }
</style>
