<script>
  import LienProjet from '../components/LienProjet.svelte';
</script>

<div class="listeprojets">
  <LienProjet
    titre="INV - Villes invisibles"
    lien="/projet"
    image="/inv-img/inv-1-01-01.jpg"
    colorbox="#c96f44"
  />
  <LienProjet
    titre="IDE - Identités visuelles"
    lien="/projet"
    image="/inv-img/Cremaillere.gif"
    colorbox="#37553e"
  />
  <LienProjet
    titre="SAT - Ecole chantier"
    lien="/projet"
    image="/Icone_maison-infini.gif"
    colorbox="#e6b399"
  />

  <LienProjet
    titre="BEL - Il était une fois Bellegarde-sur-Valserine"
    lien="/projet"
    image="/bel-images/Hotel-de-ville-anime.gif"
    colorbox="#e6b399"
  />

  <LienProjet
    titre="SAT - Ecole chantier"
    lien="/projet"
    image="/inv-img/CaraMockup.jpg"
    colorbox="#a7802e"
  />
  <LienProjet
    titre="AQU - Aquarelles du territoire"
    lien="/aquarelle"
    image="/aqu-images/Montagne_2jpg.jpg"
    colorbox="#4d6e56"
  />

  <LienProjet
    titre="BAL - Sur nos balcons, la biodiversité"
    lien="/projet"
    image="/Fleursbalcon-01-01.jpg"
    colorbox="#c96f44"
  />
</div>

<style>
  .listeprojets {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    margin: 16px 0px 16px 0px;
  }
</style>
