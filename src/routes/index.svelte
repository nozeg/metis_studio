<script lang="ts">
  import type Projet from '$types/projet';
  import LienProjet from '../components/LienProjet.svelte';
</script>

<div class="listeprojets">
  <LienProjet
    titre="INV - Villes invisibles"
    lien=""
    image="/inv-img/inv-1-01-01.jpg"
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
    titre="BEL - Il était une fois Bellegarde Art Déco"
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
  <LienProjet titre="" lien="" image="/Icone_maison-infini.gif" colorbox="#cbe0f3" />
</div>

<style>
  .listeprojets {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    margin: 16px 0px 16px 0px;
  }
</style>
