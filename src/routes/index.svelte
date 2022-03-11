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
    titre="Poubelle de table"
    lien="/projet"
    image="/inv-img/Cremaillere.gif"
    colorbox="#37553e"
  />
  <LienProjet titre="INV - Villes invisibles" lien="/projet" />
</div>

<style>
  .listeprojets {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    margin: 16px 0px 16px 0px;
  }
</style>
