<script lang="ts">
  import LogoTexte from '$components/LogoTexte.svelte';
  import LienProjet from '../components/LienProjet.svelte';
</script>

<div class="listeprojets">
  <div class="home-logo">
    <LogoTexte width="100%" />
  </div>

  <LienProjet
    titre="VAL - Au fil de la Valserine"
    lien="/val"
    image="/val-img/27042022-DSC03941.jpg"
    colorbox="#f39986"
  />
  <LienProjet titre="SAT - Ecole chantier" lien="/sat" image="/sat-img/EC.png" colorbox="#e6b399" />

  <LienProjet
    titre="BEL - Bellegarde Art Déco"
    lien="/bel"
    image="/bel-images/Hotel-de-ville-bleu.gif"
    colorbox="#788ea2"
  />

  <LienProjet
    titre="AQU - Aquarelles du territoire"
    lien="/aquarelle"
    image="/aqu-images/Montagne_2jpg.jpg"
    colorbox="#f2c8bf"
  />
</div>

<style>
  .listeprojets {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    margin: 16px 0px 16px 0px;
  }

  .home-logo {
    width: min(100%, 400px);
    margin-top: -16px;
  }
  @media (min-width: 1025px) {
    .home-logo {
      display: none;
    }
  }
</style>
