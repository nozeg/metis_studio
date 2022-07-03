<script>
  import Titresvertslongs from '$components/Titresvertslongs.svelte';
  import Titreblanclong from '$components/Titreblanclong.svelte';
  import Gens from '$components/Gens.svelte';
  import Fondquoi from '$components/Fondquoi.svelte';
  import Nour from '$components/Nour.svelte';
  import Volume from '$components/Volume.svelte';
  import Vivants from '$components/Vivants.svelte';
  import Graphiques from '$components/Graphiques.svelte';
  import Analytiques from '$components/Analytiques.svelte';
</script>

<div class="flex deux-colonnes">
  <div class="content">
    <h1 class="title-container">
      <Titresvertslongs>Métis Studio, qu'est-ce que c'est ?</Titresvertslongs>
    </h1>

    <p class="texte">
      C’est un projet pour <b>aider</b> les collectivités, les bureaux d’architecture ou d’urbanisme
      et les particuliers à exprimer leurs idées et à raconter des projets territoriaux.
    </p>
    <p class="texte">
      C’est <b>promouvoir</b> le territoire et ses ressources sous toutes ses formes : l’habité, le construit,
      les espaces naturels et sensibles, les habitant·e·s, l’histoire des lieux, etc.
    </p>
    <p class="texte">
      C’est <b>mettre au service</b> de la narration une pluralité d’outils adaptés à chaque projet :
    </p>
  </div>
</div>
<div class="flex images ">
  <Analytiques />
  <Graphiques />
  <Volume />
  <Vivants />
</div>

<div>
  <Fondquoi />
</div>

<div class="listeprojets">
  <div class="content">
    <div class="title-container">
      <Titresvertslongs>Métis Studio, quels services ?</Titresvertslongs>
    </div>
    <ul class="texte">
      <li>Médiation en urbanisme</li>
      <li>Analyses territoriales</li>
      <li>Illustration</li>
      <li>Motion design</li>
      <li>Organisation de processus participatifs</li>
      <li>Prints</li>
    </ul>
  </div>
  <div class="photo">
    <Gens />
  </div>
</div>

<div class="flex containervert">
  <img class="photo" src="/about/Pourquoi-22.svg" alt="Metis studio" />

  <div class="content">
    <div class="title-container">
      <Titreblanclong>Pourquoi Métis studio ?</Titreblanclong>
    </div>
    <p class="texte">
      Le métis est un tissu très résistant constitué d’un mélange de coton et de lin. Le <b
        >métissage</b
      >
      est au coeur de la pratique du studio, avec l’intime conviction que le
      <b
        >mélange de disciplines, de personnes et d’expérience permet l’enrichissement de chaque
        projet</b
      >.
    </p>
  </div>
</div>

<div class="flex deux-colonnes">
  <div class="content">
    <div class="title-container">
      <Titresvertslongs>Qui est derrière Métis Studio&nbsp;?</Titresvertslongs>
    </div>
    <p class="texte">
      Nour Zeghib est une <b>architecte-urbaniste</b> française diplômée d’Etat et basée à Genève, Suisse
      depuis 4 ans.
    </p>
    <p class="texte">
      Cet environnement très particulier est composé d’une <b>pluralité de paysages</b> imbriqués
      comme des pièces de puzzle : le lac Léman, le Rhône, les montagnes et la campagne, la ville.
      Autant de morceaux de territoire en pleine transformation et un terreau fertile pour
      développer l’<b>imagination</b> et la <b>créativité</b>.
    </p>
    <p class="texte">
      De nature curieuse, Nour a développé à côté de ses activités professionnelles des compétences
      pour l’<b>illustration</b>, la <b>photographie</b> et les <b>techniques d’impression</b>
      (sérigraphie, risographie).
    </p>

    <p class="texte">
      Après un parcours dans plusieurs bureaux genevois d’urbanisme et plusieurs expériences de
      <b>processus participatifs</b>, Nour souhaite implémenter à sa pratique de l’urbanisme
      <b>différentes manières sensibles</b>
      de <b>représenter</b> et de <b>raconter</b> le territoire.
    </p>
    <p class="texte"><b>C’est la naissance de Métis studio.</b></p>
  </div>
  <div class="photo">
    <Nour />
  </div>
</div>

<style>
  .photo {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 20px 20px 0px 20px;
  }

  .flex {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-grow: 1;

    text-align: left;
    flex-direction: column;
  }

  .deux-colonnes {
    display: grid;
    grid-template-columns: 1fr;
  }

  ul {
    margin-left: 20px;
  }

  @media (min-width: 768px) {
    .flex {
      justify-content: space-evenly;
      flex-direction: row;
    }
    .deux-colonnes {
      grid-template-columns: 1fr 1fr;
    }
    .images {
      max-width: 100%;
      height: auto;
    }
  }

  .content {
    margin-left: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 14px;
    color: #007d5e;
  }

  .images {
    height: auto;
  }

  .containervert {
    background-color: #e2dd77;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .title-container {
    padding-left: 10px;
  }

  .texte {
    padding: 10px;
    text-align: justify;
    color: #0c795c;
    font-size: 14px;
  }
</style>
