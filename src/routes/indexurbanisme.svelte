<script lang="ts">
  import LogoTexte from '$components/LogoTexte.svelte';
  import LienProjet from '../components/LienProjet.svelte';
</script>

<div class="listeprojets">
  <div class="home-logo">
    <LogoTexte width="100%" />
  </div>

  <LienProjet
    titre="CAB – Festival des Cabanes d’Annecy 2022 - Altitude"
    lien="/cab"
    image="/cab/02.jpg"
    colorbox="#576775"
  />
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

  <LienProjet titre="" lien="" image="/coll/Collage-GP.jpeg" colorbox="#f39986" />
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
