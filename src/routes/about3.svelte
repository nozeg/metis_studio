<script>
  import Titresvertslongs from '$components/Titresvertslongs.svelte';
  import Titreblanclong from '$components/Titreblanclong.svelte';
</script>

<div class="flex">
  <div class="content">
    <h1 class="title-container">
      <Titresvertslongs>Métis Studio, qu'est-ce que c'est ?</Titresvertslongs>
    </h1>

    <p class="texte">
      C’est un projet pour aider les collectivités, les bureaux d’architecture ou d’urbanisme et les
      particuliers à exprimer leurs idées et à raconter des projets territoriaux.
    </p>
    <p class="texte">
      C’est promouvoir le territoire et ses ressources sous toutes ses formes : l’habité, le
      construit, les espaces naturels et sensibles, les habitant·e·s, l’histoire des lieux, etc.
    </p>
    <p class="texte">
      C’est mettre au service de la narration une pluralité d’outils adaptés à chaque projet :
    </p>
  </div>
  <img class="photo" src="/outils-img/ser1.jpg" alt="Metis studio" />
  <img class="photo" src="/outils-img/ser2.jpg" alt="Metis studio" />
  <img class="photo" src="/outils-img/ser3.jpg" alt="Metis studio" />
</div>

<div class="flex">
  <div class="content">
    <div class="title-container">
      <Titresvertslongs>Métis Studio, quels services ?</Titresvertslongs>
    </div>
    <div class="texte">
      <p>Médiation en urbanisme</p>
      <p>Analyses territoriales</p>
      <p>Illustration</p>
      <p>Motion design</p>
      <p>Organisation de processus participatifs</p>
      <p>Prints</p>
    </div>
  </div>
  <img class="photo" src="/outils-img/riso.jpg" alt="Metis studio" />
</div>

<div class="flex containervert">
  <div class="content">
    <div class="title-container">
      <Titreblanclong>Pourquoi Métis studio ?</Titreblanclong>
    </div>
    <p class="texte">
      Le métis est un tissu très résistant constitué d’un mélange de coton et de lin. Le métissage
      est au coeur de la pratique du studio, avec l’intime conviction que le mélange de disciplines,
      de personnes et d’expérience permet l’enrichissement de chaque projet.
    </p>
  </div>
  <img class="photo" src="/outils-img/riso.jpg" alt="Metis studio" />
</div>

<div class="flex">
  <div class="content">
    <div class="title-container">
      <Titresvertslongs>Qui est derrière Métis Studio ?</Titresvertslongs>
    </div>
    <p class="texte">
      Nour Zeghib est une architecte-urbaniste française diplômée d’Etat et basée à Genève, Suisse
      depuis 4 ans.
    </p>
    <p class="texte">
      Cet environnement très particulier est composé d’une pluralité de paysages imbriqués comme des
      pièces de puzzle : le lac Léman, le Rhône, les montagnes et la campagne, la ville. Autant de
      morceaux de territoire en pleine transformation et un terreau fertile pour développer
      l’imagination et la créativité.
    </p>
  </div>
  <img class="photo" src="/outils-img/riso.jpg" alt="Metis studio" />
</div>

<style>
  svg {
    max-width: 100%;
    height: auto;
    display: block;
    margin-top: 5px;
  }

  .flex {
    margin-top: 10%;
    margin-bottom: 10%;
  }

  .content {
    max-width: 400px;
    margin-top: 15px;
    font-size: 14px;
    color: #007d5e;
  }

  .containervert {
    background-color: #e2dd77;
  }

  .title-container {
    padding-left: 10px;
  }

  .texte {
    max-width: 400px;
    padding: 10px;
    text-align: justify;
    color: #0c795c;
    font-size: 14px;
  }
</style>
