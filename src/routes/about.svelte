<script>
  import TitreOrange from '$components/TitreOrange.svelte';
</script>

<div class="flex">
  <div class="quoi">
    <div class="titre">
      <TitreOrange>Métis studio, qu'est-ce que c'est ?</TitreOrange>
    </div>

    <div class="texte">
      C’est un projet pour <span class="grassouillet">aider</span> les collectivités, les bureaux
      d’architecture ou d’urbanisme et les particuliers à <span class="grassouillet">exprimer</span>
      leurs idées et à
      <span class="grassouillet">raconter</span> des
      <span class="grassouillet">projets territoriaux</span>.
    </div>

    <div class="texte">
      C’est <span class="grassouillet">promouvoir</span> le territoire et ses ressources sous toutes
      ses formes : l’habité, le construit, les espaces naturels et sensibles, les habitant·e·s, l’histoire
      des lieux, etc.
    </div>

    <div class="texte">
      C’est <span class="grassouillet">mettre au service</span> de la narration une pluralité d’outils
      adaptés à chaque projet :
    </div>
  </div>
  <img class="dessinpk" src="/about/About-quoi.svg" alt="mestis-studio" />
</div>

<div class="flex fondcolor1">
  <img class="dessinpk" src="/about/About-service.svg" alt="mestis-studio" />

  <div class="service">
    <div class="titre">
      <TitreOrange>Métis studio, quels services ?</TitreOrange>
    </div>
    <div class="texte">
      Médiation en urbanisme Analyses territoriales Illustration Motion design Organisation de
      processus participatifs Prints
    </div>
  </div>
</div>

<div class="flex fondcolor1">
  <img class="dessinpk" src="/about/About-pourquoi-01.jpg" alt="mestis-studio" />
  <div class="pourquoi">
    <div class="titre">
      <TitreOrange backgroundColor="#fff">Pourquoi Métis studio ?</TitreOrange>
    </div>
    <div class="texte">
      Le métis est un tissu très résistant constitué d’un mélange de coton et de lin. Le <span
        class="grassouillet">métissage</span
      >
      est au coeur de la pratique du studio, avec l’intime conviction que le
      <span class="grassouillet"
        >mélange de disciplines, de personnes et d’expérience permet l’enrichissement de chaque
        projet</span
      >.
    </div>
  </div>
</div>

<div class="flex fondcolor2">
  <div>
    <div class="qui">
      <div class="titre">
        <TitreOrange>Qui est derrière Métis studio ?</TitreOrange>
      </div>
      <div class="texte">
        Nour Zeghib est une <span class="grassouillet">architecte-urbaniste</span> française diplômée
        d’Etat et basée à Genève, Suisse depuis 4 ans.
      </div>

      <div class="texte">
        Cet environnement très particulier est composé d’une <span class="grassouillet"
          >pluralité de paysages</span
        >
        imbriqués comme des pièces de puzzle : le lac Léman, le Rhône, les montagnes et la campagne,
        la ville. Autant de morceaux de territoire en pleine transformation et un terreau fertile pour
        développer l’<span class="grassouillet">imagination</span>
        et la
        <span class="grassouillet">créativité</span>.
      </div>

      <div class="texte">
        De nature curieuse, Nour a développé à côté de ses activités professionnelles des
        compétences pour l’<span class="grassouillet">illustration</span>, la
        <span class="grassouillet">photographie</span>
        et les <span class="grassouillet">techniques d’impression</span> (sérigraphie, risographie).
      </div>

      <div class="texte">
        Après un parcours dans plusieurs bureaux genevois d’urbanisme et plusieurs expériences de
        <span class="grassouillet">processus participatifs</span>, Nour souhaite implémenter à sa
        pratique de l’urbanisme <span class="grassouillet">différentes manières sensibles</span> de
        <span class="grassouillet">représenter</span>
        et de <span class="grassouillet">raconter le territoire</span>.
      </div>

      <div class="texte-gras">C’est la naissance de Métis studio.</div>
    </div>
    <img class="dessinpk" src="/about/About-qui.svg" alt="mestis-studio" />
  </div>
</div>

<style>
  .flex {
    display: flex;
  }
  .titre {
    color: #c96f44;
    font-size: 18px;
    font-weight: 800;
    margin: 30px;
  }
  .texte {
    margin: 30px;
    font-size: 15px;
    justify-content: baseline;
    color: #4d6e56;
    text-align: justify;
  }

  .texte-gras {
    margin: 16px;
    font-size: 16px;
    justify-content: baseline;
    font-weight: 800;
    color: #c96f44;
  }

  .titre-box {
    margin: 10px 0px;
    font-size: 15px;
    font-weight: 800;
    color: #c96f44;
  }

  .petites-boites {
    display: flex;
    text-align: center;
    padding: 16px 16px 16px 16px;
    color: #4d6e56;
  }

  .ptite-boite {
    top: 20px;
    bottom: 0;
    left: 0;
    width: 200px;
  }

  .box {
    margin: 10px;
    font-size: 12px;
    text-align: left;
    justify-content: space-between;
  }

  .grassouillet {
    font-weight: 800;
  }

  .quoi {
    margin-top: 2%;
    position: absolute;
    margin-bottom: 150%;
    max-width: 50%;
  }
  .service {
    margin-top: 2%;
    position: absolute;
    margin-bottom: 100px;
    margin-right: 55%;
  }
  .pourquoi {
    margin-top: 2%;
    position: absolute;
    margin-left: 55%;
  }

  .qui {
    margin-top: 2%;
    position: absolute;
    max-width: 40%;
  }

  .quoi {
    width: 50%;
    margin-top: 80px;
  }

  .image-gifs > img {
    margin: 0;
    height: 100%;
    max-width: 100%;
    max-height: 100vh;
  }

  .fondcolor1 {
    position: relative;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .schemas {
    width: 50%;
    margin-top: 80px;
  }

  .dessinpk {
    max-width: 100%;
  }
</style>
